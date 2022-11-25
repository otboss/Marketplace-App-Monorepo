import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { productSearchReducer } from 'src/ngrx/product-search-store/product-search-reducer';
import { CookieService } from 'ngx-cookie-service';
import { ComponentsModule } from 'src/components/components.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, StoreModule.forRoot({
      productSearch: productSearchReducer, 
    }),
    HttpClientModule,
    ComponentsModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
