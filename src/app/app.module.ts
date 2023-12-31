import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationDirective } from './directives/animation.directive';

import {GeneralRankingComponent} from './components';

import { AccessComponent, MainComponent } from './pages';
import { RfxLoggerInterceptor } from 'rfx-logger';
import { CardComponent } from './components/card/card.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackbarComponent } from './components/snackbar/snackbar.component'; 


@NgModule({
  declarations: [
    AppComponent,
    AccessComponent,
    MainComponent,
    GeneralRankingComponent,
    CardComponent,
    AnimationDirective,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: RfxLoggerInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
