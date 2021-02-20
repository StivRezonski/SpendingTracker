import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-add-new-expense',
  templateUrl: './add-new-expense.component.html',
  styleUrls: ['./add-new-expense.component.css']
})
export class AddNewExpenseComponent implements OnInit {
  expenseFormGroup = new FormGroup({
    categoryForm: new FormControl(''),
    amountForm: new FormControl(''),
    noteForm: new FormControl(''),
  });
  @Output() newExpenseEvent = new EventEmitter<string>();
  constructor(private router: Router, private appComponent: AppComponent) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.expenseFormGroup.value);
    const newExpense = this.expenseFormGroup.get('amountForm').value;
    this.router.navigateByUrl('/spending');
  }

  addNewExpense(value: string): void{
    this.onSubmit();
    this.newExpenseEvent.emit(value);
    this.appComponent.navBar = true;
    this.appComponent.newExpense = false;
  }
}
