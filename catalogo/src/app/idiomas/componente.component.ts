import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ActoresViewModelService } from './servicios.service';

@Component({
  selector: 'app-actores',
  templateUrl: './tmpl-anfitrion.component.html',
  styleUrls: ['./componente.component.scss']
})
export class ActoresComponent implements OnInit {
  constructor(protected vm: ActoresViewModelService) {}
  public get VM(): ActoresViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.vm.list();
  }

}

@Component({
  selector: 'app-actores-list',
  templateUrl: './tmpl-list.component.html',
  styleUrls: ['./componente.component.scss'],
})
export class ActoresListComponent implements OnInit {
  searchText='';
  public page: number = 0;
  constructor(protected vm: ActoresViewModelService) {}
  public get VM(): ActoresViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.vm.list();
  }
}
@Component({
  selector: 'app-actores-add',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./componente.component.scss'],
})
export class ActoresAddComponent implements OnInit {
  constructor(protected vm: ActoresViewModelService) {}
  public get VM(): ActoresViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.vm.add();
  }
}
@Component({
  selector: 'app-actores-edit',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./componente.component.scss'],
})
export class ActoresEditComponent implements OnInit, OnDestroy {
  private obs$: any;
  constructor(
    protected vm: ActoresViewModelService,
    protected route: ActivatedRoute,
    protected router: Router
  ) {}
  public get VM(): ActoresViewModelService {
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
  selector: 'app-actores-view',
  templateUrl: './tmpl-view.component.html',
  styleUrls: ['./componente.component.scss'],
})
export class ActoresViewComponent implements OnInit, OnDestroy {
  private obs$: any;
  constructor(
    protected vm: ActoresViewModelService,
    protected route: ActivatedRoute,
    protected router: Router
  ) {}
  public get VM(): ActoresViewModelService {
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

export const ACTORES_COMPONENTES = [
  ActoresComponent,
  ActoresListComponent,
  ActoresAddComponent,
  ActoresEditComponent,
  ActoresViewComponent,
];

