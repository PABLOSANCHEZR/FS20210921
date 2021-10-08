import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizerComponent } from './components/sizer.component';
import { PIPES_CADENAS } from './pipes/cadenas.pipe';
import { MIS_VALIDADORES } from './directives/validadores.directive';
import { UnlessDirective } from './directives/estructurales.directive';
import { DIRECTIVAS_ATRIBUTO } from './directives/atributos.directive';



@NgModule({
  declarations: [
    SizerComponent, PIPES_CADENAS, DIRECTIVAS_ATRIBUTO, MIS_VALIDADORES, UnlessDirective,
    ],
  exports: [
    SizerComponent, PIPES_CADENAS, DIRECTIVAS_ATRIBUTO, MIS_VALIDADORES, UnlessDirective,
  ],
  imports: [
    CommonModule
  ]
})
export class MyCoreModule { }
