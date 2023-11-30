import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { User } from './user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FormUserService {
  constructor(private http: HttpClient) { }
  dataRecived: boolean = false;
  baseUrl = 'http://127.0.0.1:5000';
  doPredict(
    victAge: any,
    victSex: any, 
    victRace: any,
    mesDelito: any, 
    franjaHoraria: any
     ): void {
    const url = `${this.baseUrl}/buscar_peligrosidad
    ?victAge=${victAge}&
    ?victSex=${victSex}&
    ?victRace=${victRace}&
    ?mesDelito=${mesDelito}&
    ?franjaHoraria=${franjaHoraria}`;
    const responseData = this.http.get<string>(url);
    // const color = responseData;
    console.log(responseData)
    this.dataRecived =true;
  }

  getDataRecivedValue(): boolean{
    return this.dataRecived;
  }

}
