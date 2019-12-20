import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockService } from '../stock.service';
import { Stock } from '../stock';
import { Warehouse } from '../warehouse';
import { Item } from '../item';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrls: ['./edit-stock.component.css']
})
export class EditStockComponent implements OnInit {
	id: number;
  stock: Stock;
  private sub: any;

  form = new FormGroup({
    quantity: new FormControl(),
    itemid: new FormControl(),
    warehouseid: new FormControl(),
  });

  constructor(
  	private route: ActivatedRoute,
  	private stockService: StockService) {}

  async ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id'];
    });

    this.stock = await this.stockService.getStock(this.id);
    this.form.get('quantity').setValue(this.stock.quantity);
    this.form.get('itemid').setValue(this.stock.item.id);
    this.form.get('warehouseid').setValue(this.stock.warehouse.id);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  async send() {
  	this.stock = new Stock();
  	this.stock.quantity = this.form.getRawValue()["quantity"];
  	this.stock.item = await this.stockService.getItem(this.form.getRawValue()["itemid"]);
  	this.stock.warehouse = await this.stockService.getWarehouse(this.form.getRawValue()["warehouseid"]);
  	await this.stockService.putStock(this.stock, this.id);
  }

}
