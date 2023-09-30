package main;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Table(name="items")
@Entity
public class ItemEntity {
    @Column(name="name")
    private String name;
    @Column(name = "full_price")
    private double full_price;
    @Column(name="discounted_price")
    private double discounted_price;
    @Column(name="category")
    private FoodCategory category;
    @Column(name="gluten_free")
    private boolean glutenFree;
    @Column(name="dairy_free")
    private boolean dairyFree;
    @Column(name="vegan")
    private boolean vegan;
    @Column(name="vegetarian")
    private boolean vegetarian;
    @Column(name="sugar_free")
    private boolean sugarFree;
    @Id
    @GeneratedValue
    private Long id;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
