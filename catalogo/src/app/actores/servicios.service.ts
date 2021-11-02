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
  page(page: number, rows: number = 20): Observable<{ page: number, pages: number, rows: number, list: Array<any> }> {
    return new Observable(subscriber => {
      this.http.get<any>(`${this.baseUrl}?page=${page}&size=${rows}&sort=lastName`, this.option)
        .subscribe(
          data => {
            subscriber.next({ page: data.number, pages: data.totalPages, rows: data.totalElements, list: data.content });
          },
          err => subscriber.error(err)
        )
    })
  }
  peliculas(key: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${key}/peliculas`)
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
    this.dao.peliculas(key).subscribe(
      data => {
      this.elemento.peliculas = data
      },
      err => this.notify.add(err.message)
      );
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

  page = 0;
  totalPages = 0;
  totalRows = 0;
  rowsPerPage = 20;
  load(page: number = -1) {
    if(page < 0) page = this.page
    this.dao.page(page, this.rowsPerPage).subscribe(
      rslt => {
        this.page = rslt.page;
        this.totalPages = rslt.pages;
        this.totalRows = rslt.rows;
        this.listado = rslt.list;
        this.modo = 'list';
      },
      err => this.notify.add(err.message)
    )
  }




}

