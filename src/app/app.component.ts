import { Component } from '@angular/core';
import { Propietario } from './models/propietario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  propietario: Propietario

  getPropietario(event: any){
    this.propietario = new Propietario(event)
  }
}
