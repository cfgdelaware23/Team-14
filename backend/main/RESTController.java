package main;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.io.JsonStringEncoder;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;


import java.util.ArrayList;
import java.util.List;

import static org.springframework.data.repository.init.ResourceReader.Type.JSON;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController("http://localhost:8080")
public class RESTController {
    @Autowired
    ItemRepository itemRepository;

    @RequestMapping(value="/inventory", method=RequestMethod.GET)
    public ResponseEntity getInventory() {
        return new ResponseEntity(itemRepository.findAll(), HttpStatus.OK);
    }

    @RequestMapping(value="/updateFull", method=RequestMethod.PATCH)
    public ResponseEntity updateFullPrice(Integer id, Integer price) {
        ItemEntity item = itemRepository.findById(id).get();
        item.setFull_price(price);
        itemRepository.save(item);
        return new ResponseEntity(HttpStatus.OK);
    }


    @RequestMapping(value="/updateDiscount", method=RequestMethod.PATCH)
    public ResponseEntity updateDiscountedPrice(Integer id, Integer price) {
        ItemEntity item = itemRepository.findById(id).get();
        item.setDiscounted_price(price);
        itemRepository.save(item);
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(value="/selection", method=RequestMethod.POST)
    public ResponseEntity getItems(RequestItems requestItems) throws JsonProcessingException {
        List<ItemEntity> entities = itemRepository.findAll();
        List<ItemResult> results = new ArrayList<>();
        List<ItemEntity> current = entities;
        boolean isMember = requestItems.membership;
        if(requestItems.dairyFree) {
            current = entities.stream().filter(itemEntity -> itemEntity.isDairyFree()).toList();
        }
        if(requestItems.glutenFree) {
            current = current.stream().filter(itemEntity -> itemEntity.isGlutenFree()).toList();
        }
        if(requestItems.vegan) {
            current = current.stream().filter(itemEntity -> itemEntity.isVegan()).toList();
        }
        if(requestItems.vegetarian) {
            current = current.stream().filter(itemEntity -> itemEntity.isVegetarian()).toList();
        }
        if(requestItems.sugarFree) {
            current = current.stream().filter(itemEntity -> itemEntity.isSugarFree()).toList();
        }

       // current = current.stream().filter(itemEntity -> itemEntity.getCategory() == requestItems.category).toList();

        for(ItemEntity itemEntity: current) {
            ItemResult itemResult = new ItemResult();
            itemResult.setName(itemEntity.getName());
            if (isMember) {
                itemResult.setPrice(itemEntity.getDiscounted_price());
            }
            else {
                itemResult.setPrice(itemEntity.getFull_price());
            }
            results.add(itemResult);
        }
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.setVisibility(PropertyAccessor.FIELD, JsonAutoDetect.Visibility.ANY);
        String jsonArray = objectMapper.writeValueAsString(results);

        return new ResponseEntity(jsonArray, HttpStatus.OK);
    }

    @RequestMapping(value="/newItem", method=RequestMethod.POST)
    public ResponseEntity postNewItem(ItemEntity itemEntity) {
        itemRepository.save(itemEntity);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(value="/post", method= RequestMethod.POST)
    public HttpStatus postBaseItems() {
        //fill database with fruits
        saveDataHelper("Apple",
                1.50, 0.50,
                FoodCategory.FRUIT, true, true,
                true, true, true);
        saveDataHelper("Banana",
                0.75, 0.30,
                FoodCategory.FRUIT, true, true,
                true, true, true);
        saveDataHelper("Oranges",
                0.75, 0.30,
                FoodCategory.FRUIT, true, true,
                true, true, true);
        saveDataHelper("Grapes",
                3.00, 1.50,
                FoodCategory.FRUIT, true, true,
                true, true, true);

        //fill database with tomatoes
        saveDataHelper("Tomato",
                1.50, 0.75,
                FoodCategory.VEGETABLE, true, true,
                true, true, true);
        saveDataHelper("Lettuce",
                1.50, 0.75,
                FoodCategory.VEGETABLE, true, true,
                true, true, true);
        saveDataHelper("Carrots",
                1.50, 0.75,
                FoodCategory.VEGETABLE, true, true,
                true, true, true);
        saveDataHelper("Onions",
                1.00, 0.50,
                FoodCategory.VEGETABLE, true, true,
                true, true, true);

        //fill database with carbs
        saveDataHelper("Cereal",
                4.50, 2.00,
                FoodCategory.CARBOHYDRATE, false, true,
                true, true, false);
        saveDataHelper("Bread",
                3.00, 1.50,
                FoodCategory.CARBOHYDRATE, false, true,
                true, true, false);
        saveDataHelper("Corn Tortilla",
                3.00, 1.50,
                FoodCategory.CARBOHYDRATE, true, true,
                true, true, true);

        //fill database with proteins
        saveDataHelper("Chicken Breast",
                7.00, 3.50,
                FoodCategory.PROTEIN, true, true,
                false, false, true);
        saveDataHelper("Steak",
                14.00, 7.50,
                FoodCategory.PROTEIN, true, true,
                false, false, true);
        saveDataHelper("Tofu",
                4.00, 2.00,
                FoodCategory.PROTEIN, true, true,
                true, true, true);
        saveDataHelper("Eggs",
                4.00, 2.00,
                FoodCategory.PROTEIN, true, true,
                false, false, true);
        saveDataHelper("Greek Yogurt",
                3.00, 1.50,
                FoodCategory.PROTEIN, true, false,
                false, true, true);

        //fill database with dairy
        saveDataHelper("Whole Milk",
                2.50, 1.00,
                FoodCategory.DAIRY, true, false,
                false, true, true);
        saveDataHelper("Skim Milk",
                2.50, 1.00,
                FoodCategory.DAIRY, true, false,
                false, true, true);
        saveDataHelper("Cottage Cheese",
                3.00, 1.50,
                FoodCategory.DAIRY, true, false,
                false, true, true);
        saveDataHelper("Ice Cream",
                2.00, 1.00,
                FoodCategory.DAIRY, true, false,
                false, true, false);

        //fill database with bevs
        saveDataHelper("2 L Soda",
                2.50, 1.20,
                FoodCategory.BEVERAGE, true, true,
                true, true, false);
        saveDataHelper("Orange Juice",
                3.00, 1.50,
                FoodCategory.BEVERAGE, true, true,
                true, true, false);
        saveDataHelper("Cream Soda",
                3.50, 1.80,
                FoodCategory.BEVERAGE, false, false,
                false, true, false);

        //fill database with snacks
        saveDataHelper("Pretzels",
                3.20, 1.70,
                FoodCategory.SNACK, false, true,
                true, true, true);
        saveDataHelper("Granola Bars",
                5.00, 2.50,
                FoodCategory.SNACK, false, true,
                true, true, false);
        saveDataHelper("Muffins",
                6.40, 3.20,
                FoodCategory.SNACK, false, false,
                false, false, false);
        saveDataHelper("Peanuts",
                3.20, 1.70,
                FoodCategory.SNACK, true, true,
                true, true, true);
        return HttpStatus.ACCEPTED;
    }

    private void saveDataHelper(String name,
                           double full_price,
                           double discounted_price,
                           FoodCategory category,
                           boolean glutenFree,
                           boolean dairyFree,
                           boolean vegan,
                           boolean vegetarian,
                           boolean sugar_free) {
        ItemEntity entity = new ItemEntity();
        entity.setName(name);
        entity.setFull_price(full_price);
        entity.setDiscounted_price(discounted_price);
        entity.setCategory(category);
        entity.setGlutenFree(glutenFree);
        entity.setDairyFree(dairyFree);
        entity.setVegan(vegan);
        entity.setVegetarian(vegetarian);
        entity.setSugarFree(sugar_free);
        itemRepository.save(entity);
    }
}
