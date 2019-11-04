package hu.elte.warehouseproject.controllers;

import hu.elte.warehouseproject.entities.Item;
import hu.elte.warehouseproject.repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/item")
public class ItemController {
    @Autowired
    private ItemRepository itemRepository;

    @GetMapping("/{id}")
    public ResponseEntity getOne(@PathVariable Long id) {
        return new ResponseEntity(itemRepository.findById(id), HttpStatus.OK);
    }

    @GetMapping("")
    public ResponseEntity getAll() {
        return new ResponseEntity(itemRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity create(@RequestBody Item item) {
        itemRepository.save(item);
        return new ResponseEntity(itemRepository.findById(item.getId()), HttpStatus.OK);
    }

    @PutMapping("")
    public ResponseEntity update(@RequestBody Item item) {
        Optional<Item> baseEntity = itemRepository.findById(item.getId());

        if (baseEntity.isPresent()) {
            itemRepository.save(item);
            return new ResponseEntity(itemRepository.findById(item.getId()), HttpStatus.OK);
        }

        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("")
    public ResponseEntity delete(@RequestBody Item item) {
        Optional<Item> baseEntity = itemRepository.findById(item.getId());

        if (baseEntity.isPresent()) {
            itemRepository.delete(item);
            return ResponseEntity.ok().build();
        }

        return ResponseEntity.notFound().build();
    }
}
