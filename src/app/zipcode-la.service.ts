import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZipcodeLAService {
  constructor(private http: HttpClient) { }
  baseUrl = 'http://127.0.0.1:5000';
  
  getColorByZipCode(zipCode: string): Observable<{data: string}> {
    const url = `${this.baseUrl}/getColor?zipcode=${zipCode}`;
    const responseData = this.http.get<string>(url);
    // const color = responseData;
    console.log(responseData)
    return this.http.get<{data: string}>(url);
  }
  
}
