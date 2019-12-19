import { Component, OnInit } from '@angular/core';
import { WarehouseService } from '../warehouse.service';
import { Warehouse } from '../warehouse';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {
	warehouses: Warehouse[];
	displayedColumns = ['id', 'name', 'address', 'contactDetails', 'edit', 'remove'];

  constructor(private warehouseService: WarehouseService) { }

    async ngOnInit() {
        this.warehouses = await this.warehouseService.getWarehouses();
        console.log(this.warehouses);
    }

    async remove(id: Number) {
    	await this.warehouseService.removeWarehouse(id);
    	this.warehouses = await this.warehouseService.getWarehouses();
    }
}
