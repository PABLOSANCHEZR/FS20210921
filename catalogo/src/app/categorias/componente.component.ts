import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CategoriasViewModelService } from './servicios.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './tmpl-anfitrion.component.html',
  styleUrls: ['./componente.component.scss']
})
export class CategoriasComponent implements OnInit {
  constructor(protected vm: CategoriasViewModelService) {}
  public get VM(): CategoriasViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.vm.list();
  }

}

@Component({
  selector: 'app-categorias-list',
  templateUrl: './tmpl-list.component.html',
  styleUrls: ['./componente.component.scss'],
})
export class CategoriasListComponent implements OnInit {
  searchText='';
  public page: number = 0;
  constructor(protected vm: CategoriasViewModelService) {}
  public get VM(): CategoriasViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.vm.list();
  }
}
@Component({
  selector: 'app-categorias-add',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./componente.component.scss'],
})
export class CategoriasAddComponent implements OnInit {
  constructor(protected vm: CategoriasViewModelService) {}
  public get VM(): CategoriasViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.vm.add();
  }
}
@Component({
  selector: 'app-categorias-edit',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./componente.component.scss'],
})
export class CategoriasEditComponent implements OnInit, OnDestroy {
  private obs$: any;
  constructor(
    protected vm: CategoriasViewModelService,
    protected route: ActivatedRoute,
    protected router: Router
  ) {}
  public get VM(): CategoriasViewModelService {
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
  selector: 'app-categorias-view',
  templateUrl: './tmpl-view.component.html',
  styleUrls: ['./componente.component.scss'],
})
export class CategoriasViewComponent implements OnInit, OnDestroy {
  private obs$: any;
  constructor(
    protected vm: CategoriasViewModelService,
    protected route: ActivatedRoute,
    protected router: Router
  ) {}
  public get VM(): CategoriasViewModelService {
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

export const CATEGORIAS_COMPONENTES = [
  CategoriasComponent,
  CategoriasListComponent,
  CategoriasAddComponent,
  CategoriasEditComponent,
  CategoriasViewComponent,
];

