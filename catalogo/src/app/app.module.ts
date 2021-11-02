import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjaxWaitInterceptor, MainModule } from './main';
import { CommonComponentsModule } from './common-components';
import { CommonServicesModule } from './common-services';
import { AuthInterceptor, SecurityModule } from './security';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ERROR_LEVEL, LoggerService, MyCoreModule } from 'src/lib/my-core';
import { ActoresModule } from './actores';
import { CategoriasModule } from './categorias';
import { PeliculasModule } from './peliculas';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    SecurityModule,
    CommonComponentsModule,
    CommonServicesModule,
    HttpClientModule,FormsModule,
    MyCoreModule,
    ActoresModule,PeliculasModule,CategoriasModule
  ],
  providers: [
     LoggerService,
    {provide: ERROR_LEVEL,useValue: environment.ERROR_LEVEL},
    //{provide: LoggerService, useClass: LoggerHTTPService},
    { provide: LOCALE_ID, useValue: 'es-ES'},
    { provide: HTTP_INTERCEPTORS, useClass: AjaxWaitInterceptor, multi: true, },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true, },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
