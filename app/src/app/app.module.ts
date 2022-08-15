import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { StoreModule } from '@ngrx/store';
import { extModules } from '../build-specifics';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { EffectsModule } from '@ngrx/effects';
import { environment } from "../environments/environment";
import {TableComponent} from "./components/table/table.component";
import {CurrencyComponent} from "./components/currency/currency.component";
import {RublesPipe} from "./pipes/rubles/rubles.pipe";
import {AppFacade} from "./+state/facade/app.facade";
import {STORE_KEY} from "./contants";
import {appReducer} from "./+state/reducers/app.reducer";
import {AppEffects} from "./+state/effects/app.effects";
import {CurrencyService} from "./services/currency.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SidebarComponent,
    TableComponent,
    FooterComponent,
    CurrencyComponent,
    RublesPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(
      { [STORE_KEY]: appReducer },
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([AppEffects]),
    extModules,
  ],
  providers: [AppFacade, CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
