import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { AgenciaVuelosComponent } from './agencia-vuelos/agencia-vuelos.component';
import { GenerarTickeComponent } from './generar-ticke/generar-ticke.component';
import { ReservarVueloComponent } from './reservar-vuelo/reservar-vuelo.component';




const routes: Routes = [
  {path:'inicio',component:LoginComponent},
  {path:'registro',component:RegistrarseComponent},
  {path:'Agencia',component:AgenciaVuelosComponent},
  {path:'Generar',component:GenerarTickeComponent },
  {path:'reservar',component:ReservarVueloComponent},
  {path:' ',component:LoginComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
