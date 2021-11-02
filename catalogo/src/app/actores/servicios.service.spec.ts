import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import * as dateFormat from 'dateformat';
import { Observable, of } from 'rxjs';
import { LoggerService } from 'src/lib/my-core';
import { NotificationService } from '../common-services';
import { ActoresViewModelService, Actores } from './servicios.service';


export class DAOServiceMock<T, K> {
  constructor(private listado: Array<T>) {}
  query(): Observable<Array<T>> {
    return of(this.listado);
  }
  get(id: number): Observable<T> {
    return of(this.listado[id]);
  }
  add(item: T): Observable<T> {
    this.listado.push(item);
    return of(item);
  }
  change(id: number, item: T): Observable<T> {
    this.listado[id] = item;
    return of(item);
  }
  remove(id: number): Observable<T> {
    let item = this.listado[id];
    this.listado.slice(id, 1);
    return of(item);
  }
}
const now = new Date();
class ActoresDAOService extends DAOServiceMock<Actores, number> {

  constructor() {
    super([
      {
        id: 1,
        firstName: 'Pepito',
        lastName: 'Grillo',
        lastUpdate: dateFormat(now, "dd, mm, yyyy, h:MM:ss TT"),

      },
      {
        id: 2,
        firstName: 'Pepita',
        lastName: 'Grilla',
        lastUpdate: dateFormat(now, "dd, mm, yyyy, h:MM:ss TT"),
      },
      {
        id: 3,
        firstName: 'Jose',
        lastName: 'Garcia',
        lastUpdate: dateFormat(now, "dd, mm, yyyy, h:MM:ss TT"),
      },
      {
        id: 4,
        firstName: 'Manolo',
        lastName: 'Sanchez',
        lastUpdate: dateFormat(now, "dd, mm, yyyy, h:MM:ss TT"),
      },
    ]);
  }
}
fdescribe('ActoresViewModelService', () => {
  let service: ActoresViewModelService;
  let dao: ActoresDAOService;
  let key:any;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        NotificationService,
        LoggerService,
        { provide: ActoresDAOService, useClass: ActoresDAOService },
      ],
    });
    service = TestBed.inject(ActoresViewModelService);
    dao = TestBed.inject(ActoresDAOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('DAOServiceMock Query', (done: DoneFn) => {
    dao.query().subscribe(
      (data) => {
        expect(data.length).toBe(4);
        done();
      },
      () => fail()
    );
  });

  it('list', fakeAsync(() => {
    service.list();
    tick();
    expect(service.Listado.length).toBe(4);
    expect(service.Modo).toBe('list');
  }));

  it('megusta', () => {
    expect(service.megusta(key)).toBe(key+1);
  });

});







