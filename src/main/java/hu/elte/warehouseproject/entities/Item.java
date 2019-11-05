package hu.elte.warehouseproject.entities;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "item")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Long bprice;

    @Column(nullable = false)
    private Long sprice;

    @ManyToOne()
    @JoinColumn(name = "vendor_id")
    private Vendor vendor;

    @OneToMany(targetEntity = Stock.class, mappedBy = "item")
    private List<Stock> stock;
}


