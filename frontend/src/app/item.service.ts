import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from './item';
import {MatTableModule} from '@angular/material/table';
import { Vendor } from './vendor';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization': 'Basic bGFsaTpwYXNzd29yZA==',
  })
};

@Injectable({
  providedIn: 'root'
})

export class ItemService {
	private itemUrl = 'http://localhost:8080/item';
	private vendorUrl = 'http://localhost:8080/vendor';

	constructor(private http: HttpClient) { }

	getItem(id: number): Promise<Item> {
	  return this.http.get<Item>(`${this.itemUrl}/${id}`, httpOptions).toPromise();
	}

	getItems(): Promise<Item[]> {
	  return this.http.get<Item[]>(`${this.itemUrl}`, httpOptions).toPromise();
	}

	removeItem(itemid: Number): Promise<Boolean> {
	  return this.http.delete<Boolean>(`${this.itemUrl}/${itemid}`, httpOptions).toPromise();
	}

	putItem(item: Item, id: Number) : Promise<Item> {
		return this.http.put<Item>(`${this.itemUrl}/${id}`, item, httpOptions).toPromise();
	}

	addItem(item: Item) : Promise<Item> {
		return this.http.post<Item>(`${this.itemUrl}`, item, httpOptions).toPromise();
	}

	getVendor(id: Number) : Promise<Vendor> {
		return this.http.get<Vendor>(`${this.vendorUrl}/${id}`, httpOptions).toPromise();
	}

}
