import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-vendor',
  templateUrl: './edit-vendor.component.html',
  styleUrls: ['./edit-vendor.component.css']
})
export class EditVendorComponent implements OnInit {
	id: number;
  vendor: Vendor;
  private sub: any;

  form = new FormGroup({
    name: new FormControl(),
    address: new FormControl(),
    contact: new FormControl(),
  });

  constructor(
  	private route: ActivatedRoute,
  	private vendorService: VendorService) {}

  async ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id'];
    });

    this.vendor = await this.vendorService.getVendor(this.id);
    this.form.get('name').setValue(this.vendor.name);
    this.form.get('address').setValue(this.vendor.address);
    this.form.get('contact').setValue(this.vendor.contact);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  async send() {
  	this.vendor = new Vendor();
  	this.vendor.name = this.form.getRawValue()["name"];
  	this.vendor.address = this.form.getRawValue()["address"];
  	this.vendor.contact = this.form.getRawValue()["contact"];
  	await this.vendorService.putVendor(this.vendor, this.id);
  }

}
