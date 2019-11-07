package hu.elte.warehouseproject.controllers;

import hu.elte.warehouseproject.entities.Item;
import hu.elte.warehouseproject.entities.Stock;
import hu.elte.warehouseproject.entities.Warehouse;
import hu.elte.warehouseproject.repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/item")
public class ItemController {
    @Autowired
    private ItemRepository itemRepository;

    @GetMapping("/{id}")
    public ResponseEntity getOne(@PathVariable Long id) {
        Optional<Item> item = itemRepository.findById(id);

        if (!item.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(item.get());
    }

    @GetMapping("/search/{term}")
    public ResponseEntity searchByName(@PathVariable String term) {
        ArrayList<Item> items = (ArrayList<Item>)itemRepository.findByNameContaining(term);

        if (items.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(items);
    }

    @GetMapping("/getlocationof/{id}")
    public ResponseEntity getAllByItemId(@PathVariable Long id) {
        Optional<Item> item = itemRepository.findById(id);

        if (!item.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        ArrayList<Warehouse> warehouses = new ArrayList<>();

        for (Stock s : item.get().getStock()) {
            if (!warehouses.contains(s.getWarehouse())) {
                warehouses.add(s.getWarehouse());
            }
        }

        return ResponseEntity.ok(warehouses);
    }

    @GetMapping("")
    public ResponseEntity<Iterable<Item>> getAll() {
        return new ResponseEntity<>(itemRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity create(@RequestBody Item item) {
        return ResponseEntity.ok(itemRepository.save(item));
    }

    @PutMapping("/{id}")
    public ResponseEntity update(@PathVariable Long id, @RequestBody Item item) {
        Optional<Item> baseItem = itemRepository.findById(id);

        if (baseItem.isPresent()) {
            item.setId(id);
            return ResponseEntity.ok(itemRepository.save(item));
        }

        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id) {
        Optional<Item> baseItem = itemRepository.findById(id);

        if (baseItem.isPresent()) {
            itemRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }

        return ResponseEntity.notFound().build();
    }
}