package hu.elte.warehouseproject.controllers;

import hu.elte.warehouseproject.entities.Warehouse;
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

    @GetMapping("/{id}")
    public ResponseEntity getOne(@PathVariable Long id) {
        return new ResponseEntity(warehouseRepository.findById(id), HttpStatus.OK);
    }

    @GetMapping("")
    public ResponseEntity getAll() {
        return new ResponseEntity(warehouseRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity create(@RequestBody Warehouse warehouse) {
        warehouseRepository.save(warehouse);
        return new ResponseEntity(warehouseRepository.findById(warehouse.getId()), HttpStatus.OK);
    }

    @PutMapping("")
    public ResponseEntity update(@RequestBody Warehouse warehouse) {
        Optional<Warehouse> baseEntity = warehouseRepository.findById(warehouse.getId());

        if (baseEntity.isPresent()) {
            warehouseRepository.save(warehouse);
            return new ResponseEntity(warehouseRepository.findById(warehouse.getId()), HttpStatus.OK);
        }

        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("")
    public ResponseEntity delete(@RequestBody Warehouse warehouse) {
        Optional<Warehouse> baseEntity = warehouseRepository.findById(warehouse.getId());

        if (baseEntity.isPresent()) {
            warehouseRepository.delete(warehouse);
            return ResponseEntity.ok().build();
        }

        return ResponseEntity.notFound().build();
    }
}
