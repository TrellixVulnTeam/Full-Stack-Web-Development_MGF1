import { Component, OnInit } from '@angular/core';
import { DestinosViajes } from '../models/destinos-viajes.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {

  destinos: DestinosViajes[];

  constructor() { 
    this.destinos = [];
  }

  ngOnInit(): void {
  }

  guardar(nombre:string,url:string):boolean{
    this.destinos.push(new DestinosViajes(nombre,url));
    return false;
  }
}
