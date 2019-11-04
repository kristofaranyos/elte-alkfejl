package hu.elte.warehouseproject.repositories;

import hu.elte.warehouseproject.entities.Vendor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VendorRepository extends CrudRepository<Vendor, Long> {

}