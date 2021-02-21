import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { SharedService } from '../shared.service';


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
  @Output() newSelectedCategory = new EventEmitter<string>();
  categories = this.sharedService.getCategoriesData();


  constructor(private router: Router, private appComponent: AppComponent, private sharedService: SharedService) {
  }

  ngOnInit(): void {
    // this.incomeForm.setValue('Aco');
    // console.log(this.incomeFormGroup.value);
  }

  onSubmit(): void {
    console.log(this.incomeFormGroup.value);
    const newIncome = this.incomeFormGroup.get('amountForm').value;
    const selectedCategory = this.incomeFormGroup.get('categoryForm').value;
    this.router.navigateByUrl('/spending');
    this.addSelectedCategory(selectedCategory);
  }

  addNewIncome(value: string): void {
    this.onSubmit();
    this.newIncomeEvent.emit(value);
    this.appComponent.navBar = true;
    this.appComponent.newIncome = false;

    // this.appComponent.newIncome = true;
  }
  addSelectedCategory(value: string): void{
    this.newSelectedCategory.emit(value);
  }
}
