package hu.elte.warehouseproject.repositories;

import hu.elte.warehouseproject.entities.Stock;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StockRepository extends CrudRepository<Stock, Long> {

}