import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActoresAddComponent, ActoresEditComponent, ActoresListComponent, ActoresViewComponent } from './actores/componente.component';
import { CategoriasAddComponent, CategoriasEditComponent, CategoriasListComponent, CategoriasViewComponent } from './categorias/componente.component';
import { HomeComponent } from './main';
import { PeliculasAddComponent, PeliculasEditComponent, PeliculasListComponent, PeliculasViewComponent } from './peliculas/componente.component';
import { AuthGuard } from './security';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'inicio', component: HomeComponent , data: { pageTitle: 'Inicio' }},
  { path: 'actores',
  children: [
  {path: '', component: ActoresListComponent, data: { pageTitle: 'Actores' } },
  { path: 'add', component: ActoresAddComponent, canActivate: [AuthGuard] },
  { path: ':id/edit', component: ActoresEditComponent, /*canActivate: [AuthGuard] */},
  { path: ':id', component: ActoresViewComponent },
  { path: ':id/:kk', component: ActoresViewComponent },
  ]},
  {
    path: 'peliculas',
    children: [
      { path: '', component: PeliculasListComponent , data: { pageTitle: 'Peliculas' }},
      { path: 'add', component: PeliculasAddComponent },
      { path: ':id/edit', component: PeliculasEditComponent },
      { path: ':id', component: PeliculasViewComponent },
      { path: ':id/:kk', component: PeliculasViewComponent },
    ]},
    {
      path: 'categorias',
      children: [
        { path: '', component: CategoriasListComponent , data: { pageTitle: 'Categorias' }},
        { path: 'add', component: CategoriasAddComponent },
        { path: ':id/edit', component: CategoriasEditComponent },
        { path: ':id', component: CategoriasViewComponent },
        { path: ':id/:kk', component: CategoriasViewComponent },
      ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
