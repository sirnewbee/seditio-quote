import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor() { }

  public trainings = [
    {'name': "Google Analytics" , 'total': 0 , 'duration': 3 , 'description': "Google Analytics is a freemium web analytics service offered by Google that tracks and reports website traffic. Google launched the service in November 2005 after acquiring Urchin. Google Analytics is now the most widely used web analytics service on the Internet."},
    {'name': "Google Tag Manager" , 'total': 0 , 'duration': 3 , 'description': "Google Tag Manager is a tag management system (TMS) that allows you to quickly and easily update tracking codes and related code fragments collectively known as tags on your website or mobile app." },
    {'name': "Google AdWords", 'total': 0 , 'duration': 3 , 'description': "AdWords (Google AdWords) is an advertising service by Google for businesses wanting to display ads on Google and its advertising network. The AdWords program enables businesses to set a budget for advertising and only pay when people click the ads. The ad service is largely focused on keywords." },
    {'name': "Search Engine Optimization" , 'total': 0 , 'duration': 3 , 'description': "the process of maximizing the number of visitors to a particular website by ensuring that the site appears high on the list of results returned by a search engine." },
    {'name': "Conversion Optimisation" , 'total': 0 , 'duration': 1.5 , 'description': "In internet marketing, conversion optimization, or conversion rate optimization is a system for increasing the percentage of visitors to a website that convert into customers, or more generally, take any desired action on a webpage. It is commonly referred to as CRO." },
    {'name': "Google My Business" , 'total': 0 , 'duration': 1.5 , 'description': "Google My Business is a free and easy-to-use tool for businesses and organizations to manage their online presence across Google, including Search and Maps. By verifying and editing your business information, you can both help customers find you and tell them the story of your business." }
  ];
}
