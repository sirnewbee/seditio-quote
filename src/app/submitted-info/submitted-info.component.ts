import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ConstantsService } from '../constants.service';

@Component({
  selector: 'app-submitted-info',
  templateUrl: './submitted-info.component.html',
  styleUrls: ['./submitted-info.component.css']
})
export class SubmittedInfoComponent implements OnInit {

  @ViewChild('content') content: ElementRef;

  public choices;
  public webDev;
  public digitalMktg;
  public hosting;
  public training;
  public quoteTotal: number = 0;

  constructor(public cons: ConstantsService) { }

  ngOnInit() {
    this.choices = JSON.parse(localStorage.getItem("arr"));
    this.webDev = JSON.parse(localStorage.getItem("web-dev"));
    this.digitalMktg = JSON.parse(localStorage.getItem("digital-marketing"));
    this.hosting = JSON.parse(localStorage.getItem("hostingData"));
    this.training = JSON.parse(localStorage.getItem("training"));
    this.quoteTotal += JSON.parse(this.webDev.total) + JSON.parse(this.digitalMktg.total) + JSON.parse(this.hosting.total) + JSON.parse(this.training.total);
  }
  
  printDiv(divName){
    var printContents = document.getElementById(divName).innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;
  }

  saveDiv(){
    // const filename  = 'seditio-quotation.pdf';

		//   html2canvas(document.querySelector('#printableArea')).then(canvas => {
		// 	let pdf = new jsPDF('p', 'mm', 'a4');
		// 	pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
		// 	pdf.save(filename);
    // });
    window.print();
  }
}
