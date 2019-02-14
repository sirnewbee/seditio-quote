import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebDevelopmentService {

  pages = [
    {'name': 'Templates Design' , 'pages': 0 , 'total': 0 , 'price': 0 , 'description': "A design template or template is a file that has been created with an overall layout or blueprint with a format to be used for a group of documents or a generic document. ... A program may come with pre-designed templates with the ability for a template to be created by the user."},
    {'name': 'Total number of Pages' , 'pages': 0 , 'total': 0 , 'price': 0 , 'description': "Over all number of pages."},
    {'name': 'SEO Optimisation Per Page' , 'pages': 0 , 'total': 0 , 'price': 0 , 'description': "SEO (Search Engine Optimization) aims to draw the greatest amount of traffic possible to a website by bringing it to the top of a search engine's results. SEO is used by businesses and individuals to maximize the visibility of their websites and content in order to boost traffic and therefore business."},
    {'name': 'Templates Development' , 'pages': 0 , 'total': 0 , 'price': 0 , 'description': "A template is a form, mold, or pattern used as a guide to making something. ... In programming, a template is a generic class or other unit of source code that can be used as the basis for unique units of code."},
    {'name': 'Deployment and Testing' , 'pages': 0 , 'total': 0 , 'price': 0 , 'description': "Creating and testing a live content."}
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
