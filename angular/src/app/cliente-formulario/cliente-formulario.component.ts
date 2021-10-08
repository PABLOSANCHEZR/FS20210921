import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { NotificationService, NotificationType } from '../common-services';


export interface Cliente {
  id_cliente: number | null;
  nombre: string;
  apellidos: string;
  correo: string | null;
  telefono: number | string ;
  edad: number | null;
  fecha: Date | string;
  dni: string | null;
}

@Injectable({providedIn: 'root'})
export class ClienteViewModel {
  Listado: Array<Cliente> = [
    { id_cliente: 1, nombre: 'Pepito', apellidos: 'Grillo', correo: 'pepito@grillo', telefono: 67930393 ,edad: 99, fecha: '14/06/21', dni: '12345678Z' }
  ]
  Elemento: Cliente = { id_cliente: null, nombre: '', apellidos: '', correo: null, telefono: '', edad: null, fecha: '', dni: null };
  IsAdd = true;

  constructor(private notify: NotificationService) {

  }

  public list() {

  }

  public add() {
    this.Elemento = { id_cliente: null, nombre: '', apellidos: '', correo: null, telefono: '', edad: null, fecha: '', dni: null  }
    this.IsAdd = true;
  }

  public edit() {
    this.Elemento = this.Listado[0];
    this.IsAdd = false;
  }

  public view() {
    this.Elemento = this.Listado[0];
    this.IsAdd = false;
  }

  public delete() {

  }

  public cancel() {

  }

  public send() {
    this.notify.add((this.IsAdd ? 'Nuevos: ' : 'Modificados: ') + JSON.stringify(this.Elemento), NotificationType.info);
  }
}

@Component({
  selector: 'app-formulario',
  templateUrl: './cliente-formulario.component.html',
  styleUrls: ['./cliente-formulario.component.scss']
})
export class ClienteFormularioComponent implements OnInit {

  constructor(public vm: ClienteViewModel) { }

  ngOnInit(): void {
  }

}
