import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule, MatIconModule, MatButtonModule } from '@angular/material';
import { ItemComponent } from './item/item.component';
import { StockComponent } from './stock/stock.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { IndexComponent } from './index/index.component';
import { VendorComponent } from './vendor/vendor.component';
import { UserComponent } from './user/user.component';

import { HttpClientModule } from "@angular/common/http";
import { AddItemComponent } from './add-item/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { EditVendorComponent } from './edit-vendor/edit-vendor.component';
import { AddWarehouseComponent } from './add-warehouse/add-warehouse.component';
import { EditWarehouseComponent } from './edit-warehouse/edit-warehouse.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { EditStockComponent } from './edit-stock/edit-stock.component';

@NgModule({
    declarations: [
        AppComponent,
        ItemComponent,
        StockComponent,
        WarehouseComponent,
        IndexComponent,
        VendorComponent,
        UserComponent,
        AddItemComponent,
        EditItemComponent,
        AddVendorComponent,
        EditVendorComponent,
        AddWarehouseComponent,
        EditWarehouseComponent,
        AddStockComponent,
        EditStockComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NoopAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatTableModule,
        MatGridListModule,
        MatFormFieldModule,
        MatInputModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
