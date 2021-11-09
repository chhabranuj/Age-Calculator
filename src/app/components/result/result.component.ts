import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgeCalculatorService } from 'src/app/age-calculator.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private ageCalculatorService: AgeCalculatorService, private route: Router) { }

  ngOnInit(): void {
  }
  result = this.ageCalculatorService.returnResult()

  mainPage(){
    console.log("hi")
    this.route.navigateByUrl("/")
  }
}
