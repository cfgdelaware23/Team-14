package main.java.com;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

public class RequestItems {
    @JsonProperty("membership")
    boolean membership;
    @JsonProperty("category")

    String category;
    @JsonProperty("budget")

    int budget;
    @JsonProperty("glutenFree")

    boolean glutenFree;
    @JsonProperty("dairyFree")

    boolean dairyFree;
    @JsonProperty("vegan")

    boolean vegan;
    @JsonProperty("vegetarian")

    boolean vegetarian;
    @JsonProperty("sugarFree")

    boolean sugarFree;

}
