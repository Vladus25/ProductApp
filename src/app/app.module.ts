import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { QuadratoColoreComponent } from './components/quadrato-colore/quadrato-colore.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LightComponent } from './components/light/light.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    QuadratoColoreComponent,
    LightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
