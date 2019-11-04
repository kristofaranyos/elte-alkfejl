package hu.elte.warehouseproject.entities;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "item")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private Long bprice;

    @Column
    private Long sprice;

    @ManyToOne()
    @JoinColumn(name = "vendor_id")
    private Vendor vendor;
}


