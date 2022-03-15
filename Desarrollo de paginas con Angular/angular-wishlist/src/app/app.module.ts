import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestinosViajesComponent } from './destinos-viajes/destinos-viajes.component';
import { ListaDestinosComponent } from './lista-destinos/lista-destinos.component';

@NgModule({
  declarations: [
    AppComponent,
    DestinosViajesComponent,
    ListaDestinosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
