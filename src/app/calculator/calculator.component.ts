import { Component, OnInit } from '@angular/core';
import { NOMEM } from 'dns';
import { AnimationDurations } from '@angular/material/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  amount:any;
  currency:number;
  result:number;
  
  calculate(event) { 
    this.amount = Number(event.target.value);
    this.currency = 5.24;
    this.result = this.currency * this.amount;
    return this.result.toFixed(2);
  }
    
}
  





