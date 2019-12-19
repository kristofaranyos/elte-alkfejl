import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ItemService } from '../item.service';
import { Item } from '../item';
import { Vendor } from '../vendor';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  item: Item;
  vendorid: Number;
  vendor: Vendor;
  private sub: any;

  form = new FormGroup({
    name: new FormControl(),
    bprice: new FormControl(),
    sprice: new FormControl(),
    vendor: new FormControl(),
  });

  constructor(
  	private itemService: ItemService) {}

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  async send() {
  	this.item = new Item();
  	this.item.name = this.form.getRawValue()["name"];
  	this.item.bprice = this.form.getRawValue()["bprice"];
  	this.item.sprice = this.form.getRawValue()["sprice"];
  	this.vendorid = this.form.getRawValue()["vendor"];
  	this.item.vendor = await this.itemService.getVendor(this.vendorid);
  	await this.itemService.addItem(this.item);
  }


}
