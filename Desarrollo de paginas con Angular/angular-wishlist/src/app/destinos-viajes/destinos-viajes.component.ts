import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { DestinosViajes } from '../models/destinos-viajes.model';

@Component({
  selector: 'app-destinos-viajes',
  templateUrl: './destinos-viajes.component.html',
  styleUrls: ['./destinos-viajes.component.css']
})
export class DestinosViajesComponent implements OnInit {

  @Input() destinos: DestinosViajes;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  
  constructor() {}

  ngOnInit() {
  }

}
