import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SpendingComponent} from '../spending/spending.component';
import { TransactionsComponent } from '../transactions/transactions.component';
import { CategoriesComponent } from '../categories/categories.component';
import { HomeComponent } from '../home/home.component';
import { AddNewIncomeComponent } from '../add-new-income/add-new-income.component';
import { AddNewExpenseComponent } from '../add-new-expense/add-new-expense.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'spending', component: SpendingComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'add-new-income', component: AddNewIncomeComponent },
  { path: 'add-new-expense', component: AddNewExpenseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
