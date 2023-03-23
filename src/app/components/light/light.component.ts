import { Component, Input } from '@angular/core';
import { Light } from 'src/app/app.component';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})
export class LightComponent {

  @Input()
  lights!: Light[];

  luminosit!: number;

  // colora(c:string){
  //   this.luminosit = c;
  // }

}
