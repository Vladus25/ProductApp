import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { QuadratoColoreComponent } from './components/quadrato-colore/quadrato-colore.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    QuadratoColoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
