package main.java;

import lombok.Getter;
import lombok.Setter;

@Getter
public enum FoodCategory {
    FRUIT("FRUIT"),
    VEGETABLE("VEGETABLE"),
    CARBOHYDRATE("CARBOHYDRATE"),
    PROTEIN("PROTEIN"),
    DAIRY("DAIRY"),
    BEVERAGE("BEVERAGE"),
    SNACK("SNACK");
    String value;

    FoodCategory(String value) {
        this.value = value;
    }
}
