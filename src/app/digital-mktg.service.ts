import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DigitalMktgService {
  public online_ads = [
    {'name': "Google AdWords Search Campaign", 'price': 350, 'pages': 0, 'total': 0},
    {'name': "Google AdWords Display Campaign", 'price': 500, 'pages': 0, 'total': 0},
    {'name': "Monthly Management and Reporting", 'price': 350, 'pages': 0, 'total': 0},
    {'name': "Facebook Campaign Creation", 'price': 450, 'pages': 0, 'total': 0},
    {'name': "LinkedIn Campaign Creation", 'price': 350    , 'pages': 0, 'total': 0},
    {'name': "YouTube Search Campaign Creation", 'price': 350, 'pages': 0, 'total': 0},
    {'name': "YouTube Video Campaign Creation", 'price': 850, 'pages': 0, 'total': 0}
  ];

  public conversion_optimizations = [
    {'name': "Full Conversion Audit", 'price': 3500, 'pages': 0, 'total': 0},
    {'name': "Digital Marketing Strategy", 'price': 1500, 'pages': 0, 'total': 0},
    {'name': "AdWords Account Audit", 'price': 2250, 'pages': 0, 'total': 0},
    {'name': "SEO / Google Search Audit", 'price': 1500, 'pages': 0, 'total': 0}
  ];

  public choices = {
    online_ad: false,
    conversion_optimization: false
  };
  
  constructor() { }
}
