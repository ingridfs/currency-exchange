import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private url = 'https://api.exchangeratesapi.io/latest?base=BRL';

  constructor(private http:HttpClient) { }

  getCurrency(){
    return this.http.get(this.url);
  }
}
