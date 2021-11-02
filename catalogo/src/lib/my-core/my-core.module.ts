import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizerComponent } from './components/sizer.component';
import { PIPES_CADENAS } from './pipes/cadenas.pipe';
import { DIRECTIVAS_ATRIBUTO } from './directives/atributos.directive';
import { MIS_VALIDADORES } from './directives/validadores.directive';
import { FilterPipe } from './pipes/FilterPipe.pipe';





@NgModule({
  declarations: [
    SizerComponent, PIPES_CADENAS, DIRECTIVAS_ATRIBUTO, MIS_VALIDADORES,FilterPipe,
  ],
  exports: [
    SizerComponent, PIPES_CADENAS, DIRECTIVAS_ATRIBUTO, MIS_VALIDADORES, FilterPipe,
  ],
  imports: [
    CommonModule
  ]
})
export class MyCoreModule { }
