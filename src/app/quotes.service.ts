import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  choices = [
    {'id': 0 , 'name': 'Web Development' , 'status': false },
    {'id': 1 , 'name': 'Digital Marketing' , 'status': false },
    {'id': 2 , 'name': 'Hosting' , 'status': false },
    {'id': 3 , 'name': 'Training' , 'status': false }
  ];

  constructor() { }

  initChoices(){
    return this.choices;
  }
}
