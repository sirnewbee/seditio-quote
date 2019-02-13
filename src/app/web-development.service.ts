import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebDevelopmentService {

  pages = [
    {'name': 'Templates Design' , 'pages': 0 , 'total': 0 , 'price': 0},
    {'name': 'Total number of Pages' , 'pages': 0 , 'total': 0 , 'price': 0},
    {'name': 'SEO Optimisation Per Page' , 'pages': 0 , 'total': 0 , 'price': 0},
    {'name': 'Templates Development' , 'pages': 0 , 'total': 0 , 'price': 0},
    {'name': 'Deployment and Testing' , 'pages': 0 , 'total': 0 , 'price': 0}
  ];

  website = [
    {'name': "Brochure Website Template" , 'pm': 0.1 , 'td': 250 , 'tnp': 100 , 'seo': 100 , 'tdev': 400 , 'dt': 600 },
    {'name': "Brochure Website B-Spoke" , 'pm': 0.2 , 'td': 500 , 'tnp': 100 , 'seo': 100 , 'tdev': 700 , 'dt': 600 }
  ];

  public selected = this.website[0].name;

  public total = 0;
  public subTotal = 0;

  constructor() { }
}
