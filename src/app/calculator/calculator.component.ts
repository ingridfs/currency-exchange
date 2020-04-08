import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  formData:any;

  constructor() {}

  ngOnInit() {
    this.formData = new FormControl();
    this.currencyName = new 
    console.log(this.formData);
  }

  amount:any;
  currencyRate:number;
  currencyName:string;
  result:number;

  calculate(event){ 
    this.amount = Number(event.target.value);
    this.currencyName = "US";
    this.currencyRate = 5.20;
    this.result = this.currencyRate * this.amount;
    return this.result.toFixed(2);
  }
  
  //  calculate(event, currencyRate, currencyName){ 

  // dollar(){
  //   this.calculate(event, 5.20, "U$");
  // }

  // euro(){
  //   this.calculate(event, 5.60, "EU");
  // }
  // pound(){
  //   this.calculate(event, 6.20, "PD");
  // }
    
}
  





