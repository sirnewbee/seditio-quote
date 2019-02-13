import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { HostingService } from '../hosting.service';
import { ConstantsService } from '../constants.service';

@Component({
  selector: 'app-hosting',
  templateUrl: './hosting.component.html',
  styleUrls: ['./hosting.component.css']
})
export class HostingComponent implements OnInit {

  public total: number = 0;

  //Hosting Services
  public hostings = [];

  public hItems = [];

  constructor(public AppComp: AppComponent , 
  public HostingComp: HostingService , 
  public cons: ConstantsService
  ) {
  }

  ngOnInit() {
    if(localStorage.getItem("hChoices") != null){
      this.hostings = JSON.parse(localStorage.getItem("hChoices"));
      this.total = JSON.parse(localStorage.getItem("hTotal"));
    }else{
      this.hostings = this.HostingComp.hostings1;
    }
    this.onChange();
    console.log(this.hostings);
  }

  onChange(){
    this.hostings = this.AppComp.updateChange(this.hostings);
    this.total = this.AppComp.updateTotal(this.hostings);
    localStorage.setItem("hChoices" , JSON.stringify(this.hostings));
    localStorage.setItem("hTotal", JSON.stringify(this.total));
    this.updateLocalStorage();
  }

  updateLocalStorage(){
    let submit = {
      data: this.hostings,
      total: this.total,
      date: new Date
    };

    localStorage.setItem("hostingData" , JSON.stringify(submit));
    
  }
}
