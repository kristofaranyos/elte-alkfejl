import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from './item';
import {MatTableModule} from '@angular/material/table';

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

	constructor(private http: HttpClient) { }

	getItem(id: number): Promise<Item> {
	  return this.http.get<Item>(`${this.itemUrl}/${id}`).toPromise();
	}

	getItems(): Promise<Item[]> {
	  return this.http.get<Item[]>(`${this.itemUrl}`, httpOptions).toPromise();
	}

	removeItem(itemid: Number): Promise<Boolean> {
	  return this.http.delete<Boolean>(`${this.itemUrl}/${itemid}`, httpOptions).toPromise();
	}

}
