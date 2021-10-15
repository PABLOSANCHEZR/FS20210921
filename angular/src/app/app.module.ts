import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemosComponent } from './demos/demos.component';
import { FormsModule } from '@angular/forms';
import { DinamicoComponent } from './dinamico/dinamico.component';
import { ERROR_LEVEL, LoggerService, MyCoreModule } from 'src/lib/my-core';
import { MainModule } from './main';
import { CommonServicesModule } from './common-services';
import { SecurityModule } from './security';
import { environment } from 'src/environments/environment';
import { FormularioComponent } from './formulario/formulario.component';
import { ClienteFormularioComponent } from './cliente-formulario/cliente-formulario.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactosModule } from './contactos';
import { CommonComponentModule } from './common-component';
@NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
    DinamicoComponent,
    FormularioComponent,
    ClienteFormularioComponent,
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule, MyCoreModule, MainModule,CommonServicesModule,SecurityModule,
    CommonServicesModule,
    MainModule,
    CommonComponentModule,
    HttpClientModule,
    ContactosModule,
  ],
  providers: [
    LoggerService,
    // { provide: LoggerService, useClass: LoggerHTTPService },
    { provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL },
    { provide: LOCALE_ID, useValue: 'es-ES'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
