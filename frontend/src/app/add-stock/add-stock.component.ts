import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { StockService } from '../stock.service';
import { Stock } from '../stock';
import { Item } from '../item';
import { Warehouse } from '../warehouse';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {
  stock: Stock;
  private sub: any;

  form = new FormGroup({
    quantity: new FormControl(),
    itemid: new FormControl(),
    warehouseid: new FormControl(),
  });

  constructor(
  	private stockService: StockService) {}

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  async send() {
  	this.stock = new Stock();
  	this.stock.quantity = this.form.getRawValue()["quantity"];
  	this.stock.item = await this.stockService.getItem(this.form.getRawValue()["itemid"]);
  	this.stock.warehouse = await this.stockService.getWarehouse(this.form.getRawValue()["warehouseid"]);
  	console.log(this.stock);
  	await this.stockService.addStock(this.stock);
  }


}
