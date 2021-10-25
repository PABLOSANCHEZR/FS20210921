import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ContactosAddComponent, ContactosEditComponent, ContactosListComponent, ContactosViewComponent } from './contactos';
import { DemosComponent } from './demos/demos.component';
import { LibrosComponent } from './libros';
import { HomeComponent, PageNotFoundComponent } from './main';
import { AuthGuard, RegisterUserComponent } from './security';

// http://localhost:4200/contactos/add

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'demos', component: DemosComponent, data: { pageTitle: 'Demos' }  },
  { path: 'chisme/de/hacer/numeros', component: CalculadoraComponent, data: { pageTitle: 'Calculadora' } },
  { path: 'contactos', component: ContactosListComponent },
  { path: 'contactos/add', component: ContactosAddComponent, canActivate: [ AuthGuard ] },
  { path: 'contactos/:id/edit', component: ContactosEditComponent, canActivate: [ AuthGuard ] },
  { path: 'contactos/:id', component: ContactosViewComponent },
  { path: 'contactos/:id/:kk', component: ContactosViewComponent },
  { path: 'antonie/hasted', redirectTo: '/contactos/27'},
  { path: 'libros', children: [
    { path: '', component: LibrosComponent },
    { path: 'add', component: LibrosComponent },
    { path: ':id/edit', component: LibrosComponent },
    { path: ':id', component: LibrosComponent },
    { path: ':id/:kk', component: LibrosComponent },
  ]},
  { path: 'blog', loadChildren: () => import('./blog/modulo.module').then(mod => mod.BlogModule)},
  { path: 'config', loadChildren: () => import('./config/config.module').then(mod => mod.ConfigModule)},
  { path: 'registro', component: RegisterUserComponent },
  { path: '404.html', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
