import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {
  
  amount:any;
  currencyExchanges:any;
  currencyRate:number;
  currencySign:string;
  resultReal:number;
  resultCurrency:number;

  constructor(private currency:CurrencyService) {}
  
  ngOnInit() {
    this.currency.getCurrency().subscribe(
        (response) => {
        this.currencyExchanges = new Object (response);
        this.currencyRate = this.currencyExchanges.rates['USD'].toFixed(2);
        this.currencySign = 'USD';
        }
      ); 
  }

  selectedCurrency(coin){
    console.log(coin);
    this.currencyRate = this.currencyExchanges.rates[coin].toFixed(2);
    console.log(this.currencyRate);
    this.currencySign = coin;
    console.log(coin);
    
  }

  realCurrencyCalc(event){ 
    this.amount = Number(event.target.value);
    console.log(this.amount);
    this.resultReal = this.amount * this.currencyRate;
    console.log(this.resultReal);
    return this.resultReal.toFixed(2);
  }
  
  currencyRealCalc(event){ 
    this.amount = Number(event.target.value);
    console.log(this.amount);
    this.resultCurrency = this.amount / this.currencyRate;
    console.log(this.resultCurrency);
    return this.resultCurrency.toFixed(2);
  }
    
}
  





