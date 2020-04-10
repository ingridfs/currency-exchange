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
        this.currencyExchanges = new Object(response);
        this.currencyRate = this.currencyExchanges.rates['USD'].toFixed(2);
        this.currencySign = 'USD';
        }
      ); 
  }

  selectedCurrency(coin){
    this.currencyRate = this.currencyExchanges.rates[coin].toFixed(2);
    this.currencySign = coin;
  }

  realCurrencyCalc(event){ 
    this.amount = Number(event.target.value);
    this.resultReal = this.amount * this.currencyRate;
    return this.resultReal.toFixed(2);
  }
  
  currencyRealCalc(event){ 
    this.amount = Number(event.target.value);
    this.resultCurrency = this.amount / this.currencyRate;
    return this.resultCurrency.toFixed(2);
  }
    
}
  





