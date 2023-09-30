package main;

public enum FoodCategory {
    FRUIT(1),
    VEGETABLE(2),
    CARBOHYDRATE(3),
    PROTEIN(4),
    DAIRY(5),
    BEVERAGE(6),
    SNACK(7);
    int value;

    FoodCategory(int value) {
        this.value = value;
    }
}
