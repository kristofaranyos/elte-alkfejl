import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { StockComponent } from './stock/stock.component';
import { ItemComponent } from './item/item.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { VendorComponent } from './vendor/vendor.component';
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
   		path: 'item',
    	component: ItemComponent
	},
	{
    	path: 'warehouse',
		component: WarehouseComponent
	},
	{
    	path: 'vendor',
		component: VendorComponent
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
