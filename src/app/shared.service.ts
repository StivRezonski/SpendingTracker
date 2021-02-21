import { Injectable } from '@angular/core';


export class Categories {
  categoryName: string;
}

const category: Categories[] = [{
  categoryName: 'Electricity',
},
  {
    categoryName: 'Shopping',
  },
  {
    categoryName: 'Eating Out',
  },
  {
    categoryName: 'Other',
  },
  {
    categoryName: 'Gifts',
  },
  {
    categoryName: 'Hygiene',
  },
  {
    categoryName: 'Phone Bills',
  },
  {
    categoryName: 'Entertainment',
  },
  {
    categoryName: 'Fuel',
  },
  {
    categoryName: 'General',
  },
  {
    categoryName: 'Holiday',
  },
  {
    categoryName: 'Kids',
  },
  {
    categoryName: 'Sport',
  },
  {
    categoryName: 'Travel',
  },

];

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  constructor() {
  }

  getCategoriesData(): Categories[] {
    return category;
  }
}
