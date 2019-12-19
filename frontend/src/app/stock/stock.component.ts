import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Stock } from '../stock';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
	stock: Stock[];
	displayedColumns = ['id', 'quantity', 'itemid', 'itemname', 'warehouseid', 'warehousename', 'edit', 'remove'];

  constructor(private stockService: StockService) { }

    async ngOnInit() {
        this.stock = await this.stockService.getStocks();
        console.log(this.stock);
    }

    async remove(id: Number) {
    	await this.stockService.removeStock(id);
    	this.stock = await this.stockService.getStocks();
    }

}
