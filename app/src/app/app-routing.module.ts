import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CurrencyComponent} from "./modules/currency/components/currency/currency.component";
import {CalculatorComponent} from "./components/calculator/calculator.component";

const routes: Routes = [
  {
    path: 'currency',
    loadChildren: () => import('../app/modules/currency/currency.module').then(m => m.CurrencyModule),
  },
  { path: 'calculator', component: CalculatorComponent },
  { path: '**', redirectTo: 'currency' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
