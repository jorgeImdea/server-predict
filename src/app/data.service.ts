import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> {
    // Cambié la ruta para cargar el archivo CSV localmente
    return this.http.get<any[]>('../../../data/fc3noor2.csv');
  }
}