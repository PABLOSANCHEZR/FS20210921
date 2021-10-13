import { Component, OnInit } from '@angular/core';
import { ClienteFormularioComponent } from '../cliente-formulario/cliente-formulario.component';
import { ContactosComponent } from '../contactos/componente.component';
import { DemosComponent } from '../demos/demos.component';
import { FormularioComponent } from '../formulario/formulario.component';
import { HomeComponent } from '../main';


@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.scss']
})
export class DinamicoComponent implements OnInit {
  menu = [
    { texto: 'Contactos', icono: 'fas fa-home', componente: ContactosComponent },
    { texto: 'inicio', icono: 'fas fa-home', componente: HomeComponent },
    { texto: 'formulario', icono: 'fas fa-user-tie', componente: FormularioComponent },
    { texto: 'demos', icono: 'fas fa-chalkboard-teacher', componente: DemosComponent },
    { texto: 'calculadora', icono: 'fas fa-calculator', },
    { texto: 'Cliente Formulario', icono: 'icono fas fa-user-tie', componente: ClienteFormularioComponent},
    { texto: 'libros', icono: 'fas fa-address-book'},




  ];

  actual : any = this.menu[0].componente;


  constructor() { }

  seleccionar(indice: number): void {
    this.actual = this.menu[indice].componente;
  }

  ngOnInit(): void {
  }

}
