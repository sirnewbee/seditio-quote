import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HostingService {

  
  public hostings1 = [
    {pages: 0 , name: "Basic Hosting" , price: 75, total: 0 , description: "Basic hosting is a service that allows organizations and individuals to post a website or web page onto the Internet."},
    {pages: 0 , name: "Managed Hosting" , price: 150, total: 0 , description: "A dedicated hosting service, dedicated server, or managed hosting service is a type of Internet hosting in which the client leases an entire server not shared with anyone else."},
    {pages: 0 , name: "SLA Business Hours" , price: 600, total: 0 , description: "A Service Level Agreement (SLA) definition may need to apply only during the business hours of an associated group or organization. To define business hours, you need a schedule with entries for the working hours and exceptions for holidays." },
    {pages: 0 , name: "SLA 24/7" , price: 1800, total: 0 , description: "Service is available every day of the year."}
  ]

  constructor() { }
}
