package hu.elte.warehouseproject.repositories;

import hu.elte.warehouseproject.entities.Item;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemRepository extends CrudRepository<Item, Long> {
    List<Item> findByNameContaining(String name);
}