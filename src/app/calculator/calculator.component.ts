import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  formData;
  currentCurrency;

  constructor() {}
  
  ngOnInit() {
    this.formData = new FormGroup({
      currentCurrency: new FormControl("USD")
    });
    console.log(this.formData);
    
  }
  
  amount:any;
  currencyRate:number;
  currencyName:string;
  resultReal:number;
  resultCurrency:number;
  

  realCurrencyCalc(event){ 
    console.log(event)
    this.amount = Number(event.target.value);
    this.currencyName = "USD";
    this.currencyRate = 5.20;
    this.resultReal = this.currencyRate * this.amount;
    return this.resultReal.toFixed(2);
  }
  
  currencyRealCalc(event){
    console.log(event)
    this.amount = Number(event.target.value);
    this.currencyName = "USD";
    this.currencyRate = 5.20;
    this.resultCurrency = this.amount / this.currencyRate;
    return this.resultCurrency.toFixed(2);
  }
    
}
  





