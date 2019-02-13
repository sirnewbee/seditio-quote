import { Component, OnInit } from '@angular/core';
import { DigitalMktgService } from '../digital-mktg.service';
import { ConstantsService } from '../constants.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-digital-mktg',
  templateUrl: './digital-mktg.component.html',
  styleUrls: ['./digital-mktg.component.css'],
})
export class DigitalMktgComponent implements OnInit {
  public online_ad_opt;
  public conversion_opt;
  public total: number = 0;
  public choices;

  public online_ads = [];
  public conversion_optimizations = [];
  
  
  constructor(public _DMSerivce: DigitalMktgService,
    public AppComp: AppComponent,
    public cons: ConstantsService
    ) {
    this.choices = this._DMSerivce.choices;
    this.online_ads = this._DMSerivce.online_ads;
    this.conversion_optimizations = this._DMSerivce.conversion_optimizations;
   }

  ngOnInit() {
    if(localStorage.getItem("online_ads")!= null || localStorage.getItem("conversion_optimizations") != null){
      this.online_ads = JSON.parse(localStorage.getItem("online_ads"));
      this.conversion_optimizations = JSON.parse(localStorage.getItem("conversion_optimizations"));
      this.total = JSON.parse(localStorage.getItem("dmTotal"));
      this.choices = JSON.parse(localStorage.getItem("dmChoices"));
      (this.choices.conversion_optimization)? console.log("true"):console.log("false");
    }
  }

  test(){
    console.log(this._DMSerivce.choices);
  }

  onChange(){
    this.total = 0;
    
    //Onlinde Advertising
    this.online_ads = this.AppComp.updateChange(this.online_ads);
    this.total += this.AppComp.updateTotal(this.online_ads);

    //Conversion Optimization
    this.conversion_optimizations = this.AppComp.updateChange(this.conversion_optimizations);
    this.total += this.AppComp.updateTotal(this.conversion_optimizations);

    let choicesArr = {
      online_ad: this.choices.online_ad,
      conversion_optimization: this.choices.conversion_optimization
    };

    localStorage.setItem("online_ads" , JSON.stringify(this.online_ads));
    localStorage.setItem("conversion_optimizations" , JSON.stringify(this.conversion_optimizations));
    localStorage.setItem("dmTotal" , JSON.stringify(this.total));
    localStorage.setItem("dmChoices" , JSON.stringify(choicesArr));
    this.updateLocalStorage();
  }

  updateLocalStorage(){
    let submit = {
      online_ad_opt: this.choices.online_ad,
      conversion_opt: this.choices.conversion_optimization,
      online_ads_data: this.online_ads,
      conversion_optimizations_data: this.conversion_optimizations,
      total: this.total
    }

    localStorage.setItem("digital-marketing" , JSON.stringify(submit));
  }

}
