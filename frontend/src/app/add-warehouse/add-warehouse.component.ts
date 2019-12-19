import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { WarehouseService } from '../warehouse.service';
import { Warehouse } from '../warehouse';

@Component({
  selector: 'app-add-warehouse',
  templateUrl: './add-warehouse.component.html',
  styleUrls: ['./add-warehouse.component.css']
})
export class AddWarehouseComponent implements OnInit {
  warehouse: Warehouse;
  private sub: any;

  form = new FormGroup({
    name: new FormControl(),
    address: new FormControl(),
    contact_details: new FormControl(),
  });

  constructor(
  	private warehouseService: WarehouseService) {}

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  async send() {
  	this.warehouse = new Warehouse();
  	this.warehouse.name = this.form.getRawValue()["name"];
  	this.warehouse.address = this.form.getRawValue()["address"];
  	this.warehouse.contactDetails = this.form.getRawValue()["contact_details"];
  	await this.warehouseService.addWarehouse(this.warehouse);
  }
}

