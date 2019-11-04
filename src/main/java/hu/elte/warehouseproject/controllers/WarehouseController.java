package hu.elte.warehouseproject.controllers;

import hu.elte.warehouseproject.entities.Warehouse;
import hu.elte.warehouseproject.repositories.WarehouseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("warehouse")
public class WarehouseController {
    @Autowired
    private WarehouseRepository warehouseRepository;

    @GetMapping("")
    public ResponseEntity getAll() {
        return new ResponseEntity(warehouseRepository.findAll(), HttpStatus.OK);
    }
}
