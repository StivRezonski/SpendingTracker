import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-spending',
  templateUrl: './spending.component.html',
  styleUrls: ['./spending.component.css']
})
export class SpendingComponent implements OnInit {
  incomeValue: number;
  expenseValue: number;
  balanceValue: number;
  @Input() income: number;
  @Input() expense: number;
  @Input() category: string;

  constructor(private router: Router, private appComponent: AppComponent) {
  }

  ngOnInit(): void {
    if (this.income === undefined && this.expense === undefined) {
      this.balanceValue = 0;
    } else {
      this.balanceValue = this.income - this.expense;
    }

  }


  insertNewIncome(): void {
    this.appComponent.navBar = false;
    this.appComponent.newIncome = true;
    this.router.navigate(['/add-new-income']);
  }

  insertNewExpense(): void {
    this.appComponent.navBar = false;
    this.appComponent.newExpense = true;
    this.router.navigate(['/add-new-expense']);
  }
}
