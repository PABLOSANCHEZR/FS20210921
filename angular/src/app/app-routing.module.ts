import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import {
  ContactosAddComponent,
  ContactosEditComponent,
  ContactosListComponent,
  ContactosViewComponent,
} from './contactos/componente.component';
import { DemosComponent } from './demos/demos.component';
import { LibrosListComponent, LibrosAddComponent, LibrosEditComponent, LibrosViewComponent, LibrosComponent } from './libros';
import { HomeComponent, PageNotFoundComponent } from './main';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'demos', component: DemosComponent },
  { path: 'chisme/de/hacer/numeros', component: CalculadoraComponent },
  { path: 'contactos', component: ContactosListComponent },
  { path: 'contactos/add', component: ContactosAddComponent },
  { path: 'contactos/:id/edit', component: ContactosEditComponent },
  { path: 'contactos/:id', component: ContactosViewComponent },
  { path: 'contactos/:id/:kk', component: ContactosViewComponent },
  { path: 'antonie/hasted', redirectTo: '/contactos/27' },
  { path: 'libros', component: LibrosComponent },
  { path: 'libros/add', component: LibrosComponent },
  { path: 'libros/:id/edit', component: LibrosComponent },
  { path: 'libros/:id', component: LibrosComponent },
  { path: 'libros/:id/:kk', component: LibrosComponent },
  { path: '404.html', component: PageNotFoundComponent },

  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
