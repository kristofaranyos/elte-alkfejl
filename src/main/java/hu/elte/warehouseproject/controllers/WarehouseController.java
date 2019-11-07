package hu.elte.warehouseproject.controllers;

import hu.elte.warehouseproject.entities.Warehouse;
import hu.elte.warehouseproject.repositories.ItemRepository;
import hu.elte.warehouseproject.repositories.StockRepository;
import hu.elte.warehouseproject.repositories.WarehouseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/warehouse")
public class WarehouseController {
    @Autowired
    private WarehouseRepository warehouseRepository;

    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private StockRepository stockRepository;

    @GetMapping("/{id}")
    public ResponseEntity getOne(@PathVariable Long id) {
        Optional<Warehouse> warehouse = warehouseRepository.findById(id);

        if (!warehouse.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(warehouse.get());
    }

    @GetMapping("")
    public ResponseEntity getAll() {
        return new ResponseEntity(warehouseRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity create(@RequestBody Warehouse warehouse) {
        return ResponseEntity.ok(warehouseRepository.save(warehouse));
    }

    @PutMapping("/{id}")
    public ResponseEntity update(@PathVariable Long id, @RequestBody Warehouse warehouse) {
        Optional<Warehouse> baseWarehouse = warehouseRepository.findById(id);

        if (baseWarehouse.isPresent()) {
            warehouse.setId(id);
            return ResponseEntity.ok(warehouseRepository.save(warehouse));
        }

        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id) {
        Optional<Warehouse> baseWarehouse = warehouseRepository.findById(id);

        if (baseWarehouse.isPresent()) {
            warehouseRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }

        return ResponseEntity.notFound().build();
    }
}