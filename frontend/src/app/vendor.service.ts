import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vendor } from './vendor';
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
export class VendorService {
	private vendorUrl = 'http://localhost:8080/vendor';

	constructor(private http: HttpClient) { }

	getVendor(id: number): Promise<Vendor> {
	  return this.http.get<Vendor>(`${this.vendorUrl}/${id}`, httpOptions).toPromise();
	}

	getVendors(): Promise<Vendor[]> {
	  return this.http.get<Vendor[]>(`${this.vendorUrl}`, httpOptions).toPromise();
	}

	removeVendor(id: Number): Promise<Boolean> {
	  return this.http.delete<Boolean>(`${this.vendorUrl}/${id}`, httpOptions).toPromise();
	}

	putVendor(item: Vendor, id: Number) : Promise<Vendor> {
		return this.http.put<Vendor>(`${this.vendorUrl}/${id}`, item, httpOptions).toPromise();
	}

	addVendor(item: Vendor) : Promise<Vendor> {
		return this.http.post<Vendor>(`${this.vendorUrl}`, item, httpOptions).toPromise();
	}
}
