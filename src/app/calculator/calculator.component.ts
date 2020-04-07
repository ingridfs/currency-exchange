import { Component, OnInit } from '@angular/core';
import { NOMEM } from 'dns';
import { AnimationDurations } from '@angular/material/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  firstAmount:number;
  secondAmount:number;
  result:any;
  
  getFirstAmount(event){
      return this.firstAmount = event.target.value;  
         
    }

  getSecondAmount(event){
      return this.secondAmount = event.target.value;
       
    }

  calculate() {
    this.result = this.getFirstAmount(event) * this.getSecondAmount(event);
    console.log(this.result);
     
    }
    
  }
  





