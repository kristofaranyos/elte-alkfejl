package hu.elte.warehouseproject.entities;

import lombok.Data;

@Data
public class ItemDetails <T> {
    public ItemDetails(Item item, T details) {
        this.id = item.getId();
        this.name = item.getName();
        this.bprice = item.getBprice();
        this.sprice = item.getSprice();
        this.details = details;
    }

    private Long id;
    private String name;
    private Long bprice;
    private Long sprice;
    private T details;
}
