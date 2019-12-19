import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { StockComponent } from './stock/stock.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { EditStockComponent } from './edit-stock/edit-stock.component';
import { ItemComponent } from './item/item.component';
import { AddItemComponent } from './add-item/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { AddWarehouseComponent } from './add-warehouse/add-warehouse.component';
import { EditWarehouseComponent } from './edit-warehouse/edit-warehouse.component';
import { VendorComponent } from './vendor/vendor.component';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { EditVendorComponent } from './edit-vendor/edit-vendor.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
	{
    	path: '',
    	component: IndexComponent
	},
	{
    	path: 'stock',
    	component: StockComponent
	},
	{
    	path: 'addstock',
		component: AddStockComponent
	},
	{
    	path: 'editstock/:id',
		component: EditStockComponent
	},
	{
   		path: 'item',
    	component: ItemComponent
	},
	{
    	path: 'additem',
		component: AddItemComponent
	},
	{
    	path: 'edititem/:id',
		component: EditItemComponent
	},
	{
    	path: 'warehouse',
		component: WarehouseComponent
	},
	{
    	path: 'addwarehouse',
		component: AddWarehouseComponent
	},
	{
    	path: 'editwarehouse/:id',
		component: EditWarehouseComponent
	},
	{
    	path: 'vendor',
		component: VendorComponent
	},
	{
    	path: 'addvendor',
		component: AddVendorComponent
	},
	{
    	path: 'editvendor/:id',
		component: EditVendorComponent
	},
	{
    	path: 'user',
		component: UserComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
