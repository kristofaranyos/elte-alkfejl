import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WarehouseService } from '../warehouse.service';
import { Warehouse } from '../warehouse';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-warehouse',
  templateUrl: './edit-warehouse.component.html',
  styleUrls: ['./edit-warehouse.component.css']
})
export class EditWarehouseComponent implements OnInit {
	id: number;
  warehouse: Warehouse;
  private sub: any;

  form = new FormGroup({
    name: new FormControl(),
    address: new FormControl(),
    contact: new FormControl(),
  });

  constructor(
  	private route: ActivatedRoute,
  	private warehouseService: WarehouseService) {}

  async ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id'];
    });

    this.warehouse = await this.warehouseService.getWarehouse(this.id);
    this.form.get('name').setValue(this.warehouse.name);
    this.form.get('address').setValue(this.warehouse.address);
    this.form.get('contact').setValue(this.warehouse.contactDetails);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  async send() {
  	this.warehouse = new Warehouse();
  	this.warehouse.name = this.form.getRawValue()["name"];
  	this.warehouse.address = this.form.getRawValue()["address"];
  	this.warehouse.contactDetails = this.form.getRawValue()["contact"];
  	await this.warehouseService.putWarehouse(this.warehouse, this.id);
  }

}
