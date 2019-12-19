import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {
  vendor: Vendor;
  private sub: any;

  form = new FormGroup({
    name: new FormControl(),
    address: new FormControl(),
    contactDetails: new FormControl(),
  });

  constructor(
  	private vendorService: VendorService) {}

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  async send() {
  	this.vendor = new Vendor();
  	this.vendor.name = this.form.getRawValue()["name"];
  	this.vendor.address = this.form.getRawValue()["address"];
  	this.vendor.contact = this.form.getRawValue()["contactDetails"];
  	await this.vendorService.addVendor(this.vendor);
  }
}
