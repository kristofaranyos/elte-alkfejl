import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Warehouse } from './warehouse';
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
export class WarehouseService {
	private warehouseUrl = 'http://localhost:8080/warehouse';

	constructor(private http: HttpClient) { }

	getWarehouse(id: number): Promise<Warehouse> {
	  return this.http.get<Warehouse>(`${this.warehouseUrl}/${id}`, httpOptions).toPromise();
	}

	getWarehouses(): Promise<Warehouse[]> {
	  return this.http.get<Warehouse[]>(`${this.warehouseUrl}`, httpOptions).toPromise();
	}

	removeWarehouse(id: Number): Promise<Boolean> {
	  return this.http.delete<Boolean>(`${this.warehouseUrl}/${id}`, httpOptions).toPromise();
	}

	putWarehouse(item: Warehouse, id: Number) : Promise<Warehouse> {
		return this.http.put<Warehouse>(`${this.warehouseUrl}/${id}`, item, httpOptions).toPromise();
	}

	addWarehouse(item: Warehouse) : Promise<Warehouse> {
		return this.http.post<Warehouse>(`${this.warehouseUrl}`, item, httpOptions).toPromise();
	}
}
