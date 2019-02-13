import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.css']
})
export class ChoicesComponent implements OnInit {

  public choices = [];
  public temp = [];
  public current: string = "";
  public counter: number = -1;
  public test: string = "hello";

  constructor(public _QService: QuotesService) { }

  ngOnInit() {
    this.choices = this._QService.initChoices();
    if(localStorage.getItem("arr") != null){
      this.current = localStorage.getItem("current");
      this.choices = JSON.parse(localStorage.getItem("arr"));
    }
  }

  updateSelections(newCurrent){
    this.current = newCurrent;
    localStorage.setItem("arr" , JSON.stringify(this.choices));
    localStorage.setItem("current" , this.current);
    this.choices = JSON.parse(localStorage.getItem("arr"));
  }

  selectTab(selection){
    this.current = selection;
    localStorage.setItem("current" , this.current);
  }

  checkStatuses(){
    let retStatus = false;

    this.choices.forEach(function(item){
      retStatus = item.status || retStatus;
    });

    return retStatus;
  }

  clearLocalStorage(){
    localStorage.clear();
    location.reload();
    this.ngOnInit();
  }
}

//For going back to previous selection
// nextSelection(){
  //   // this.avail.push(selection); 
  //   // if(this.count < this.avail.length -1){
  //   //   this.count++;
  //   //   this.current = this.avail[this.count];
  //   // }
  //   localStorage.setItem("arr", JSON.stringify(this.avail));
  // }

  // backSelection(){
  //   // this.avail.splice( this.avail.indexOf(selection), 1 );
  //   // if(this.count > -1 ){
  //   //   this.count--;
  //   //   if(this.count == -1){
  //   //     this.current = "";
  //   //   }else{
  //   //     this.current = this.avail[this.count];
  //   //   }
  //     localStorage.setItem("arr", JSON.stringify(this.choices));
  //   }