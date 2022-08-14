import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CurrencyComponent} from "./components/currency/currency.component";
import {CalculatorComponent} from "./components/calculator/calculator.component";

const routes: Routes = [
  { path: 'currency', component: CurrencyComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: '**', redirectTo: 'currency' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
