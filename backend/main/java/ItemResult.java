package main.java;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Setter;

@Setter
public class ItemResult {
    @JsonProperty("name")
    String name;
    @JsonProperty("price")
    double price;
}
