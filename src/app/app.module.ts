import { HomePageModule } from './home/home.module';
import { HomePage } from './home/home.page';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ClassicModeComponent } from './classic-mode/classic-mode.component';

@NgModule({
  declarations:
  [
    AppComponent,
    ClassicModeComponent
  ],
  entryComponents: [],
  imports:
  [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers:
  [{
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
