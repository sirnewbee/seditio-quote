import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  public userInfo = {
    name: "",
    company: "",
    email: "",
    textField: "",
    date: new Date
  }

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
  }

  submitForm(){
    let refId;
    //user-info
    this.firestore.collection('customer').add(this.userInfo).then( ref => {
      refId = ref.id;

      //Choices
      let choicesData = { 
        id: refId,
        data: JSON.parse(localStorage.getItem("arr"))
      };
      console.log(choicesData.data);
      if(choicesData.data != null){
        this.firestore.collection('choices').add(choicesData);
      }
      
      //Web-development
      let webdevData = {
        id: refId,
        data: JSON.parse(localStorage.getItem('web-dev'))
      }

      if(choicesData.data[0].status){
        this.firestore.collection('web-development').add(webdevData);
      }

      //Digtal Marketing
      let dmData = {
        id: refId,
        data: JSON.parse(localStorage.getItem("digital-marketing"))
      }

      if(choicesData.data[1].status){
        this.firestore.collection('digital-marketing').add(dmData);
      }

      //Hosting
      let hostingData = {
        id: refId,
        data: JSON.parse(localStorage.getItem('hosting'))
      }

      if(choicesData.data[2].status){
        this.firestore.collection('hosting').add(hostingData);
      }

      //Training
      let trainingData = {
        id: refId,
        data: JSON.parse(localStorage.getItem("training"))
      }

      if(choicesData.data[3].status){
        this.firestore.collection('training').add(trainingData);
      }
    });
  }

}
