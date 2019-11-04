package hu.elte.warehouseproject.controllers;

import hu.elte.warehouseproject.entities.Vendor;
import hu.elte.warehouseproject.repositories.ItemRepository;
import hu.elte.warehouseproject.repositories.VendorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/vendor")
public class VendorController {
    @Autowired
    private VendorRepository vendorRepository;

    @Autowired
    private ItemRepository itemRepository;

    @GetMapping("/{id}")
    public ResponseEntity getOne(@PathVariable Long id) {
        return new ResponseEntity(vendorRepository.findById(id), HttpStatus.OK);
    }

    @GetMapping("")
    public ResponseEntity getAll() {
        return new ResponseEntity(vendorRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity create(@RequestBody Vendor vendor) {
        vendorRepository.save(vendor);
        return new ResponseEntity(vendorRepository.findById(vendor.getId()), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity update(@PathVariable Long id, @RequestBody Vendor vendor) {
        Optional<Vendor> baseEntity = vendorRepository.findById(id);

        if (baseEntity.isPresent()) {
            vendorRepository.save(vendor);
            return new ResponseEntity(vendorRepository.findById(id), HttpStatus.OK);
        }

        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id, @RequestBody Vendor vendor) {
        Optional<Vendor> baseEntity = vendorRepository.findById(id);

        if (baseEntity.isPresent()) {
            vendorRepository.delete(vendor);
            return ResponseEntity.ok().build();
        }

        return ResponseEntity.notFound().build();
    }
}