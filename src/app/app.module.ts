import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DecchartComponent } from './chart/decchart/decchart.component';
import { MonthlygraphComponent } from './chart/monthlygraph/monthlygraph.component';
import { DecreasemonthlyComponent } from './chart/decreasemonthly/decreasemonthly.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './chart/app.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    DecchartComponent,
    MonthlygraphComponent,
    DecreasemonthlyComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
