package hu.elte.warehouseproject.controllers;

import hu.elte.warehouseproject.entities.Stock;
import hu.elte.warehouseproject.repositories.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/stock")
public class StockController {
    @Autowired
    private StockRepository stockRepository;

    @GetMapping("/{id}")
    public ResponseEntity getOne(@PathVariable Long id) {
        Optional<Stock> stock = stockRepository.findById(id);

        if (!stock.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(stock.get());
    }

    @GetMapping("")
    public ResponseEntity getAll() {
        return new ResponseEntity(stockRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity create(@RequestBody Stock stock) {
        return ResponseEntity.ok(stockRepository.save(stock));
    }

    @PutMapping("/{id}")
    public ResponseEntity update(@PathVariable Long id, @RequestBody Stock stock) {
        Optional<Stock> baseStock = stockRepository.findById(id);

        if (baseStock.isPresent()) {
            stock.setId(id);
            return ResponseEntity.ok(stockRepository.save(stock));
        }

        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id) {
        Optional<Stock> baseStock = stockRepository.findById(id);

        if (baseStock.isPresent()) {
            stockRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }

        return ResponseEntity.notFound().build();
    }
}