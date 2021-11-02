import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NavigationService, NotificationService } from '../common-services';
import { LoggerService } from 'src/lib/my-core';
import { ModoCRUD } from '../base-code/tipos';
import { Router } from '@angular/router';
import { AuthService, AUTH_REQUIRED } from '../security';




export class Actores {
  id: number = 0;
  firstName: string | null = null;
  lastName: string | null = null;
  lastUpdate: string | null = null;

}



export abstract class RESTDAOService<T, K> {
 protected baseUrl = environment.apiURL;
 constructor(protected http: HttpClient, entidad: string, protected option = {}) {
 this.baseUrl += entidad;
 }
 query(): Observable<Array<T>> {
 return this.http.get<Array<T>>(this.baseUrl, this.option);
 }
 get(id: K): Observable<T> {
 return this.http.get<T>(this.baseUrl + '/' + id, this.option);
 }
 add(item: T): Observable<T> {
 return this.http.post<T>(this.baseUrl, item, this.option);
 }
 change(id: K, item: T): Observable<T> {
 return this.http.put<T>(this.baseUrl + '/' + id, item, this.option);
 }
 remove(id: K): Observable<T> {
 return this.http.delete<T>(this.baseUrl + '/' + id, this.option);
 }
}

@Injectable({
  providedIn: 'root'
 })
 export class ActoresDAOService extends RESTDAOService<any, any> {

  constructor(http: HttpClient) {
  super(http, 'actores', {
  context: new HttpContext().set(AUTH_REQUIRED, true)
  });
  }
  peliculas(item: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/${item.id}`, { peliculas: item.peliculas } )
  }

 }
@Injectable({
  providedIn: 'root'
})
export class ActoresViewModelService{
  protected listURL = '/actores';
  protected modo: ModoCRUD = 'list';
  protected listado: Array<any> = [];
  protected elemento: any = {};
  protected idOriginal: any = null;
  constructor(protected notify: NotificationService, protected out: LoggerService,private navigation: NavigationService,
     protected dao: ActoresDAOService,protected router: Router, public auth:AuthService,) { }

  public get Modo(): ModoCRUD { return this.modo; }
  public get Listado(): Array<any> { return this.listado; }
  public get Elemento(): any { return this.elemento; }

  public list(): void {
    this.dao.query().subscribe(
    data => {
    this.listado = data;
    this.modo = 'list';
    },
    err => this.notify.add(err.message)
    );
  }
  public add(): void {
    this.elemento = {};
    this.modo = 'add';
  }
  public edit(key: any): void {
    this.dao.get(key).subscribe(
    data => {
    this.elemento = data;
    this.idOriginal = key;
    this.modo = 'edit';
    },
    err => this.notify.add(err.message)
    );
  }
  public view(key: any): void {
    this.dao.get(key).subscribe(
    data => {
    this.elemento = data;
    this.modo = 'view';
    },
    err => this.notify.add(err.message)
    );
  }
  public delete(key: any): void {
    if (!window.confirm('¿Seguro?')) { return; }
    this.dao.remove(key).subscribe(
    data => this.list(),
    err => this.notify.add(err.message)
    );
  }


  public megusta(key: any): void {
    this.dao.get(key).subscribe(
    data => {
    this.elemento = data;
    this.idOriginal += key;
    this.modo = 'edit';
    },
    err => this.notify.add(err.message)
    );
  }
//   megusta(item: any) {
//     if (item == undefined){
//            item = 0;
//     } else if(item.canti != undefined){
//            item.canti++;
//     }
//  }

  clear() {
    this.elemento = {};
    this.idOriginal = null;
    this.listado = [];
  }

  public cancel(): void {
    this.elemento = {};
    this.idOriginal = null;
    // this.router.navigateByUrl(this.listURL);
    this.navigation.back()
  }

  public send(): void {
    switch (this.modo) {
    case 'add':
    this.dao.add(this.elemento).subscribe(
    data => this.cancel(),
    err => this.notify.add(err.message)
    );
    break;
    case 'edit':
    this.dao.change(this.idOriginal, this.elemento).subscribe(
    data => this.cancel(),
    err => this.notify.add(err.message)
    );
    break;
    case 'view':
    break;
    }
  }


}

