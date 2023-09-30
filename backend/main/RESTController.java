package main;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class RESTController {
    @Autowired
    ItemRepository itemRepository;


    @RequestMapping(value="/post", method= RequestMethod.POST)
    public HttpStatus postItems() {
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
