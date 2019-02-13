import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HostingService {

  
  public hostings1 = [
    {pages: 0 , name: "Basic Hosting" , price: 75, total: 0},
    {pages: 0 , name: "Managed Hosting" , price: 150, total: 0},
    {pages: 0 , name: "SLA Business Hours" , price: 600, total: 0},
    {pages: 0 , name: "SLA 24/7" , price: 1800, total: 0}
  ]

  constructor() { }
}
