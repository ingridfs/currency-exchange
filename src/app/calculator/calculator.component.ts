import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  
  amount:any;
  currencyRate:number;
  currencyName:string;
  currencySign:string;
  resultReal:number;
  resultCurrency:number;

  constructor() {}
  
  ngOnInit() {
    this.currencyRate = 5.12;
    this.currencyName = "Dólar";
    this.currencySign = "USD";
  }

  dollar() {
    this.currencyRate = 5.12;
    this.currencyName = "Dólar";
    this.currencySign = "USD";
  }

  euro() {
    this.currencyRate = 5.57;
    this.currencyName = "Euro";
    this.currencySign = "EUR";
  }

  pound() {
    this.currencyRate = 6.36;
    this.currencyName = "Libra";
    this.currencySign = "BGP";
  }

  realCurrencyCalc(event){ 
    this.amount = Number(event.target.value);
    this.resultReal = this.amount / this.currencyRate;
    return this.resultReal.toFixed(2);
  }
  
  currencyRealCalc(event){ 
    this.amount = Number(event.target.value); 
    this.resultCurrency = this.amount * this.currencyRate;
    return this.resultCurrency.toFixed(2);
  }
    
}
  





