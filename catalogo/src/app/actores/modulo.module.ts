import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../common-components';
import { CommonServicesModule } from '../common-services';
import { MyCoreModule } from 'src/lib/my-core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ACTORES_COMPONENTES } from './componente.component';
import {PaginatorModule} from 'primeng/paginator';



@NgModule({
  declarations: [
    ACTORES_COMPONENTES,
  ],
  exports: [ACTORES_COMPONENTES,
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([]),PaginatorModule,
   MyCoreModule, CommonServicesModule, CommonComponentsModule,
    ],

})
export class ActoresModule { }
