package main;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
public class loadData {
    @Autowired
    ItemRepository itemRepository;
    @Transactional
    public void loadItems(){
        ItemEntity itemEntity = new ItemEntity();
        itemEntity.setName("name");
        itemRepository.save(itemEntity);
    }
}
