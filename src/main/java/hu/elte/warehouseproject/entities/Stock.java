package hu.elte.warehouseproject.entities;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "stock")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class Stock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String vendor;

    @Column
    private Long quantity;

    /*@JsonIgnore
    @OneToMany(targetEntity = Issue.class, mappedBy = "createdBy")
    private List<Issue> createdIssue;

    @JsonIgnore
    @OneToMany(targetEntity = Issue.class, mappedBy = "updatedBy")
    private List<Issue> updatedIssue;

    @JsonIgnore
    @OneToMany(targetEntity = Message.class, mappedBy = "createdBy")
    private List<Message> createdMessage;*/

}


