import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AgGridModule } from '@ag-grid-community/angular';
import { HighchartsChartModule } from 'highcharts-angular';
import { CategoriesComponent } from './categories/categories.component';
import { SalesDashboardComponent } from './sales-dashboard/sales-dashboard.component';


@NgModule({
  declarations: [
    SalesDashboardComponent,
  ],
  imports: [
    BrowserModule,
    HighchartsChartModule,
    CategoriesComponent,
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
