import { Component, OnInit } from '@angular/core';
import { WebDevelopmentService } from '../web-development.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ConstantsService } from '../constants.service';

@Component({
  selector: 'app-web-dev',
  templateUrl: './web-dev.component.html',
  styleUrls: ['./web-dev.component.css']
})
export class WebDevComponent implements OnInit {
  public total;
  public subTotal;
  public sub_total: number = 0; 
  public project_management: number = 0;
  public selected = "";
  public web_opt;
  public pages = [];

  public website = [];

  constructor(public _WDService: WebDevelopmentService,
    public cons: ConstantsService
    ) { 
    this.pages = this._WDService.pages;
    this.website = this._WDService.website;
    this.selected = this._WDService.selected;
    this.subTotal = this._WDService.subTotal;
    this.total = this._WDService.total;
  }

  ngOnInit() {
    if(localStorage.getItem("wd-selected") != null){
      this.selected = localStorage.getItem("wd-selected");
      this.pages = JSON.parse(localStorage.getItem("wd-pages"));
      this.subTotal = localStorage.getItem("wd-subtotal");
      this.total = localStorage.getItem("wd-total");
    }
    this.onChangeService();
  }

  onChangeService(){
    if(this.selected === 'Brochure Website Template'){
      this.web_opt = this.website[0];
      this.selected = this.web_opt.name;
    }else{
      this.web_opt = this.website[1];
      this.selected = this.web_opt.name;
    }
    this.pages[0].price = this.web_opt.td;
    this.pages[1].price = this.web_opt.tnp;
    this.pages[2].price = this.web_opt.seo;
    this.pages[3].price = this.web_opt.tdev;
    this.pages[4].price = this.web_opt.dt;
    this.project_management = this.web_opt.pm;

    this.total = 0;
    for(var i = 0 ; i < this.pages.length ; i++ ){
      this.pages[i].total = this.pages[i].price * this.pages[i].pages;
      this.total += this.pages[i].total;
    }
    this.subTotal= this.total * this.project_management;
    this.total += this.subTotal;

    let webdev = {
      pages: this.pages,
      selected: this.selected,
      subtotal: JSON.stringify(this.subTotal),
      total: JSON.stringify(this.total),
      date: new Date
    }

    localStorage.setItem("web-dev" , JSON.stringify(webdev));
  }
}
