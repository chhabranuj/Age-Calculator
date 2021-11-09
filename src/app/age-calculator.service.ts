import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios  from 'axios'

@Injectable({
  providedIn: 'root'
})
export class AgeCalculatorService {

  constructor(private route: Router) { }

  result : any;
  date: any;

  setDate(date: any){
    this.date = date
    this.ageCalculator()
  }

  ageCalculator(){
    const data = {
      date: this.date,
    }
    axios.get("http://localhost:4000/ageCalculator", {params: data})
    .then((response: any) => {
      if(response.data.result){
        this.result = `You are ${response.data.years} years,  ${response.data.months} months and  ${response.data.days} days old.`
        this.route.navigateByUrl("/result")
      }
    })
  }

  returnResult(){
    return this.result
  }
}
