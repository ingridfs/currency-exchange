import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-nav-currencies',
  templateUrl: './nav-currencies.component.html',
  styleUrls: ['./nav-currencies.component.css']
})
export class NavCurrenciesComponent implements OnInit {

  currencyExchanges:any;
  currencyRate:number;
  currencyCode:string;
  currencyName:string;
  resultReal:number;
  resultCurrency:number;
  
  mainCurrencies = {
    USD : 'Dólar Americano',
    EUR : 'Euro',
    GBP : 'Libra',
    CAD : 'Dólar Canadense',
    AUD : 'Dólar Australiano',
  };

  constructor(private currency:CurrencyService) {}
  
  ngOnInit() {
    this.currency.getCurrency().subscribe(
        (response) => {
        this.currencyExchanges = new Object(response);
          for (let key in this.mainCurrencies) {
            this.currencyRate = this.currencyExchanges.rates[key];
            console.log(this.currencyRate);
            
          }
        }
      ); 
  }
  selectedCurrency(){
    // this.currencyRate = this.currencyExchanges.rates[coin].toFixed(2);
    // this.currencySign = coin;
  }
}
