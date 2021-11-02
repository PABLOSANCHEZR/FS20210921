import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../common-components';
import { CommonServicesModule } from '../common-services';
import { MyCoreModule } from 'src/lib/my-core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CATEGORIAS_COMPONENTES } from './componente.component';



@NgModule({
  declarations: [
    CATEGORIAS_COMPONENTES,
  ],
  exports: [CATEGORIAS_COMPONENTES,
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([]),
   MyCoreModule, CommonServicesModule, CommonComponentsModule,
    ],

})
export class CategoriasModule { }
