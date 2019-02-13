import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { ConstantsService } from '../constants.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  public selected: string = "";
  public status: boolean = false;
  public attendees: number = 1;
  public duration_cons: number = 150;
  public attendees_cons: number = 100;
  public total: number = 0;

  //Breakdowns
  public trainings = [];

  constructor(public tService: TrainingService,
    public AppComp: AppComponent  ,
  public cons: ConstantsService
  ) {
    this.trainings = tService.trainings;
  }

  ngOnInit() {
    if(localStorage.getItem("tSelected") == null){
      this.selected = "1 on 1";
      this.attendees = 1;
      this.onChange();
    }else{
      this.setData();
    }

    this.onChange();
  }

  setData(){
    this.selected = localStorage.getItem("tSelected");
    this.trainings = JSON.parse(localStorage.getItem("tServices"));
    this.attendees = JSON.parse(localStorage.getItem("tAttendees"));
    this.total = JSON.parse(localStorage.getItem("tTotal"));

    let trainingData = {
      selected: this.selected,
      trainings: this.trainings,
      attendees: this.attendees,
      total: this.total,
      date: new Date
    };

    localStorage.setItem("training" , JSON.stringify(trainingData));
  }

  onChange(){
    //Reset Total
    this.total = 0;

    if(this.selected == "Corporate"){
      this.status = true;
    }else{
      this.attendees = 1;
      this.status = false;
    }

    for(var i=0; i < this.trainings.length; i++){
      this.trainings[i].total = this.attendees * this.attendees_cons + (this.trainings[i].duration * this.duration_cons);
    }

    this.total += this.AppComp.updateTotal(this.trainings);

    this.updateLocalStorage();

    this.setData();
  }

  updateLocalStorage(){
    localStorage.setItem("tSelected", this.selected);
    localStorage.setItem("tServices" , JSON.stringify(this.trainings));
    localStorage.setItem("tAttendees" , JSON.stringify(this.attendees));
    localStorage.setItem("tTotal" , JSON.stringify(this.total));
  }
}