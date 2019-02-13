import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor() { }

  public trainings = [
    {'name': "Google Analytics" , 'total': 0 , 'duration': 3},
    {'name': "Google Tag Manager" , 'total': 0 , 'duration': 3},
    {'name': "Google AdWords", 'total': 0 , 'duration': 3},
    {'name': "Search Engine Optimization" , 'total': 0 , 'duration': 3},
    {'name': "Conversion Optimisation" , 'total': 0 , 'duration': 1.5},
    {'name': "Google My Business" , 'total': 0 , 'duration': 1.5}
  ];
}
