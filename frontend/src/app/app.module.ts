import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
    declarations: [
        AppComponent,
        ItemComponent,
        StockComponent,
        WarehouseComponent,
        IndexComponent,
        VendorComponent,
        UserComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NoopAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
