import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {
	vendors: Vendor[];
	displayedColumns = ['id', 'name', 'address', 'contact', 'edit', 'remove'];

  constructor(private vendorService: VendorService) { }

    async ngOnInit() {
        this.vendors = await this.vendorService.getVendors();
        console.log(this.vendors);
    }

    async remove(id: Number) {
    	await this.vendorService.removeVendor(id);
    	this.vendors = await this.vendorService.getVendors();
    }

}
