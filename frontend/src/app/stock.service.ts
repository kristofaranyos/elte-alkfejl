import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Stock } from './stock';
import {MatTableModule} from '@angular/material/table';
import { Item } from './item';
import { Warehouse } from './warehouse';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization': 'Basic bGFsaTpwYXNzd29yZA==',
  })
};

@Injectable({
  providedIn: 'root'
})
export class StockService {
	private stockUrl = 'http://localhost:8080/stock';
	private itemUrl = 'http://localhost:8080/item';
	private warehouseUrl = 'http://localhost:8080/warehouse';

	constructor(private http: HttpClient) { }

	getStock(id: number): Promise<Stock> {
	  return this.http.get<Stock>(`${this.stockUrl}/${id}`, httpOptions).toPromise();
	}

	getStocks(): Promise<Stock[]> {
	  return this.http.get<Stock[]>(`${this.stockUrl}`, httpOptions).toPromise();
	}

	removeStock(id: Number): Promise<Boolean> {
	  return this.http.delete<Boolean>(`${this.stockUrl}/${id}`, httpOptions).toPromise();
	}

	putStock(item: Stock, id: Number) : Promise<Stock> {
		return this.http.put<Stock>(`${this.stockUrl}/${id}`, item, httpOptions).toPromise();
	}

	addStock(item: Stock) : Promise<Stock> {
		return this.http.post<Stock>(`${this.stockUrl}`, item, httpOptions).toPromise();
	}

	getItem(id: Number) : Promise<Item> {
		return this.http.get<Item>(`${this.itemUrl}/${id}`, httpOptions).toPromise();
	}

	getWarehouse(id: Number) : Promise<Warehouse> {
		return this.http.get<Warehouse>(`${this.warehouseUrl}/${id}`, httpOptions).toPromise();
	}
}
