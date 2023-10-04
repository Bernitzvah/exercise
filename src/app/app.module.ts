import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';

import {GeneralRankingComponent} from './components';

import { AccessComponent, MainComponent } from './pages';
import { RfxLoggerInterceptor } from 'rfx-logger';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    AccessComponent,
    MainComponent,
    GeneralRankingComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: RfxLoggerInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
