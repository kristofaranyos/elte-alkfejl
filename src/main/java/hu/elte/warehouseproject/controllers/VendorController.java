package hu.elte.warehouseproject.controllers;

import hu.elte.warehouseproject.entities.Vendor;
import hu.elte.warehouseproject.repositories.VendorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/vendor")
public class VendorController {
    @Autowired
    private VendorRepository vendorRepository;

    @GetMapping("/{id}")
    public ResponseEntity getOne(@PathVariable Long id) {
        Optional<Vendor> vendor = vendorRepository.findById(id);

        if (!vendor.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(vendor.get());
    }

    @GetMapping("/search/{term}")
    public ResponseEntity searchByName(@PathVariable String term) {
        ArrayList<Vendor> items = (ArrayList<Vendor>)vendorRepository.findByNameContaining(term);

        if (items.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(items);
    }

    @GetMapping("")
    public ResponseEntity getAll() {
        return new ResponseEntity(vendorRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity create(@RequestBody Vendor vendor) {
        return ResponseEntity.ok(vendorRepository.save(vendor));
    }

    @PutMapping("/{id}")
    public ResponseEntity update(@PathVariable Long id, @RequestBody Vendor vendor) {
        Optional<Vendor> baseVendor = vendorRepository.findById(id);

        if (baseVendor.isPresent()) {
            vendor.setId(id);
            return ResponseEntity.ok(vendorRepository.save(vendor));
        }

        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id) {
        Optional<Vendor> baseVendor = vendorRepository.findById(id);

        if (baseVendor.isPresent()) {
            vendorRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }

        return ResponseEntity.notFound().build();
    }
}