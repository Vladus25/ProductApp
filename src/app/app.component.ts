import { LightComponent } from './components/light/light.component';
import { Component, ViewChild } from '@angular/core';
import { QuadratoColoreComponent } from './components/quadrato-colore/quadrato-colore.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProductApp';

  selectedProduct !: Product;

  //Array di prodotti
  products: Product[] = [
    { name: 'Prodotto 1', price: 10, quantity: 5 },
    { name: 'Prodotto 2', price: 15, quantity: 3 },
    { name: 'Prodotto 3', price: 20, quantity: 0 },
    { name: 'Prodotto 4', price: 25, quantity: 8 }
  ];

  SendDetails(i:Product){
    this.selectedProduct = i;
  }


  //Array di colori
  colori: Colori[] = [
    { nameColor: 'yellow'},
    { nameColor: 'purple'},
    { nameColor: 'green'},
    { nameColor: 'red'}
  ];

  @ViewChild(QuadratoColoreComponent) quadrato!: (QuadratoColoreComponent);

  //Passiamo il colore nella variabile c che e una stringa ad figlio component.
  passColor(c:string){
    this.quadrato.colora(c);
  }

  lights: Light[] = [
    { src: '../assets/img/icon.png', stato: "OFF", luminosita: 5 },
    { src: '../assets/img/icon.png', stato: "ON", luminosita: 3 },
    { src: '../assets/img/icon.png', stato: "ON", luminosita: 0 },
    { src: '../assets/img/icon.png', stato: "OFF", luminosita: 8 }
  ];

  //da fare
  passLumin(c:string){
    this.quadrato.colora(c);
  }
}

export interface Product{
  name:string;
  price:number;
  quantity:number;
}

export interface Colori{
  nameColor:string;
}

export interface Light{
  src:string;
  stato:string;
  luminosita:number;
}

