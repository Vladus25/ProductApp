import { Component } from '@angular/core';

@Component({
  selector: 'app-quadrato-colore',
  templateUrl: './quadrato-colore.component.html',
  styleUrls: ['./quadrato-colore.component.css']
})
export class QuadratoColoreComponent {

  color!: string;

  // constructor(){}

  //arriva come una stringa la varibile c e associamo alla stringa 'color' il colore, puoi su html quadrato usiamo questa variabile per assegnare background-color
  colora(c:string){
    this.color = c;
  }
}
