import { Component, OnInit } from '@angular/core';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { ClienteFormularioComponent } from '../cliente-formulario/cliente-formulario.component';
import { ContactosComponent } from '../contactos';
import { DemosComponent } from '../demos/demos.component';
import { FormularioComponent } from '../formulario/formulario.component';
import { LibrosComponent } from '../libros';
import { HomeComponent } from '../main';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.scss']
})
export class DinamicoComponent implements OnInit {
  menu = [
    { texto: 'inicio', icono: 'fas fa-home', componente: HomeComponent },
    { texto: 'libros', componente: LibrosComponent, icono: 'fas fa-address-book'},
    { texto: 'contactos', componente: ContactosComponent, icono: 'fas fa-address-book'},
    { texto: 'demos', icono: 'fas fa-chalkboard-teacher', componente: DemosComponent },
    { texto: 'calculadora', icono: 'fas fa-calculator', componente: CalculadoraComponent },
    { texto: 'cliente', icono: 'fas fa-user-tie', componente: ClienteFormularioComponent },
    { texto: 'formulario', icono: 'fas fa-user-tie', componente: FormularioComponent },
  ];

  actual = this.menu[0].componente;

  constructor() { }

  seleccionar(indice: number): void {
    this.actual = this.menu[indice].componente;
  }

  ngOnInit(): void {
  }

}
