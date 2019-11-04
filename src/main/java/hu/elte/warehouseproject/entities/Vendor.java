package hu.elte.warehouseproject.entities;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "vendor")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class Vendor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String address;

    @Column
    private String contact;

/*
    @JsonIgnore
    @OneToMany(mappedBy = "vendor")
    private List<Item> items;
*/
    @JsonIgnore
    @OneToMany(mappedBy = "vendor")
    private List<Item> message;



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


