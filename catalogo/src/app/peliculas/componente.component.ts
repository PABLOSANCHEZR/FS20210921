import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PeliculasViewModelService } from './servicios.service';


@Component({
  selector: 'app-peliculas',
  templateUrl: './tmpl-anfitrion.component.html',
  styleUrls: ['./componente.component.scss']
})
export class PeliculasComponent implements OnInit {
  constructor(protected vm: PeliculasViewModelService) {}
  public get VM(): PeliculasViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.vm.load();
  }

}

@Component({
  selector: 'app-peliculas-list',
  templateUrl: './tmpl-list.component.html',
  styleUrls: ['./componente.component.scss'],
})
export class PeliculasListComponent implements OnInit {
  searchText='';
  public page: number = 0;
  constructor(protected vm: PeliculasViewModelService) {}
  public get VM(): PeliculasViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.vm.load();
  }
}
@Component({
  selector: 'app-peliculas-add',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./componente.component.scss'],
})
export class PeliculasAddComponent implements OnInit {
  constructor(protected vm: PeliculasViewModelService) {}
  public get VM(): PeliculasViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.vm.add();
  }
}
@Component({
  selector: 'app-peliculas-edit',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./componente.component.scss'],
})
export class PeliculasEditComponent implements OnInit, OnDestroy {
  private obs$: any;
  constructor(
    protected vm: PeliculasViewModelService,
    protected route: ActivatedRoute,
    protected router: Router
  ) {}
  public get VM(): PeliculasViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.obs$ = this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params?.get('id') ?? '');
      if (id) {
        this.vm.edit(id);
      } else {
        this.router.navigate(['/404.html']);
      }
    });
  }
  ngOnDestroy(): void {
    this.obs$.unsubscribe();
  }
}
@Component({
  selector: 'app-peliculas-view',
  templateUrl: './tmpl-view.component.html',
  styleUrls: ['./componente.component.scss'],
})
export class PeliculasViewComponent implements OnInit, OnDestroy {
  private obs$: any;
  constructor(
    protected vm: PeliculasViewModelService,
    protected route: ActivatedRoute,
    protected router: Router
  ) {}
  public get VM(): PeliculasViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.obs$ = this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params?.get('id') ?? '');
      if (id) {
        this.vm.view(id);
      } else {
        this.router.navigate(['/404.html']);
      }
    });
  }
  ngOnDestroy(): void {
    this.obs$.unsubscribe();
  }
}

export const PELICULAS_COMPONENTES = [
  PeliculasComponent,
  PeliculasListComponent,
  PeliculasAddComponent,
  PeliculasEditComponent,
  PeliculasViewComponent,
];

