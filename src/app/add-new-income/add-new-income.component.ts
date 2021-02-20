import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';





@Component({
  selector: 'app-add-new-income',
  templateUrl: './add-new-income.component.html',
  styleUrls: ['./add-new-income.component.css']
})
export class AddNewIncomeComponent implements OnInit {
  incomeFormGroup = new FormGroup({
    categoryForm: new FormControl(''),
    amountForm: new FormControl(''),
    noteForm: new FormControl(''),
  });
@Output() newIncomeEvent = new EventEmitter<string>();


  constructor(private router: Router, private appComponent: AppComponent) {
  }

  ngOnInit(): void {
    // this.incomeForm.setValue('Aco');
    // console.log(this.incomeFormGroup.value);
  }

  // poslati ovo preko servisa u spending komponentu
  onSubmit(): void {
    console.log(this.incomeFormGroup.value);
    const newIncome = this.incomeFormGroup.get('amountForm').value;
    this.router.navigateByUrl('/spending');
  }

  addNewIncome(value: string): void{
    this.onSubmit();
    this.newIncomeEvent.emit(value);
    this.appComponent.navBar = true;
    this.appComponent.newIncome = false;

    // this.appComponent.newIncome = true;
  }
}
