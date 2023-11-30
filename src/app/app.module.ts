import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { DrawChartComponent } from './draw-chart/draw-chart.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { DrawChartCsvComponent } from './draw-chart-csv/draw-chart-csv.component';



@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    HomeComponent,
    DrawChartComponent,
    DrawChartCsvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule ,
    ReactiveFormsModule,
    NgApexchartsModule
  ],
  providers: [DrawChartComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
