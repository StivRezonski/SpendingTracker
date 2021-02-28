import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SpendingTracker';
  newIncome = false;
  newExpense = false;
  navBar = true;
  // do ovde je dobro povezano i salje ovo u spending ali je undifined. ne salje iz funkcije, kad stavim = 30 pokazuje 30 u spending
  currentIncome: string;
  currentExpense: string;
  currentIncomeCategory: string;
  currentExpenseCategory: string;
  expensesCategories = [];
  addNewIncome(newItem: string): void {
    this.currentIncome = newItem;
  }

  addNewExpense(newItem: string): void {
    this.currentExpense = newItem;
  }

  addNewIncomeCategory(newItem: string): void {
    this.currentIncomeCategory = newItem;
  }
  addNewExpenseCategory(newItem: string): void {
    this.currentExpenseCategory = newItem;
    this.expensesCategories.push(newItem);
    console.log(this.expensesCategories);
  }

}
