import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { DatosComponent } from './datos/datos.component';
import { PermisosComponent } from './permisos/permisos.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ConfiguracionComponent },
  { path: 'datos', component: DatosComponent },
  { path: 'permisos', component: PermisosComponent },
];

@NgModule({
  declarations: [ConfiguracionComponent, DatosComponent, PermisosComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes),
  ]
})
export class ConfigModule { }
