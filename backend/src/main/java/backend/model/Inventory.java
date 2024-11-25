package backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Inventory {
    @Id
    @GeneratedValue
    private Long id;
    private String stockCode;
    private String quantity;
    private String value;
    private String weight;
    private String Width;
    private String thickness;
    private String materialGrade;
    private String totalWeight;
    private String totalValue;
    public Inventory() {
        // Hibernate requires this constructor for instantiating objects
    }
    public Inventory(Long id, String stockCode, String quantity, String value, String weight, String width, String thickness, String materialGrade, String totalWeight, String totalValue) {
        this.id = id;
        this.stockCode = stockCode;
        this.quantity = quantity;
        this.value = value;
        this.weight = weight;
        this.Width = width;
        this.thickness = thickness;
        this.materialGrade = materialGrade;
        this.totalWeight = totalWeight;
        this.totalValue = totalValue;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStockCode() {
        return stockCode;
    }


}
