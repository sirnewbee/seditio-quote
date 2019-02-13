import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Seditio Quotaion';

  public show: boolean = true;

  updateShow(){
    this.show = !this.show;
  }

  updateChange(data){
    for(var i=0 ; i < data.length ; i++){
      data[i].total = data[i].pages * data[i].price;
    }
    return data;
  }

  updateTotal(data){
    let total = 0;

    for(var i=0 ; i < data.length ; i++){
      total += data[i].total;
    }

    return total;
  }
}
