import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { EdadComponent } from './edad/edad.component';
import {MatButtonModule } from  '@angular/material/button';
import { AgenciaVuelosComponent } from './agencia-vuelos/agencia-vuelos.component';
import { ReservarVueloComponent } from './reservar-vuelo/reservar-vuelo.component';
import { GenerarTickeComponent } from './generar-ticke/generar-ticke.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarseComponent,
    EdadComponent,
    AgenciaVuelosComponent,
    ReservarVueloComponent,
    GenerarTickeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
