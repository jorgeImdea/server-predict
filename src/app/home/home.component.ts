import { Component } from '@angular/core';
import { FormUserService } from '../form-user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DrawChartComponent } from '../draw-chart/draw-chart.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    private http: HttpClient,
    private FormUserService: FormUserService,
    private DrawChartComponent: DrawChartComponent
    ) {}
  title: string = 'Server predictor';

  dataRecived: boolean = this.FormUserService.getDataRecivedValue();
  ngAfterViewInit(){
    this.dataRecived = this.FormUserService.getDataRecivedValue();
  }
}
