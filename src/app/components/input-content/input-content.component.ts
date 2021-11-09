import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AgeCalculatorService } from 'src/app/age-calculator.service';

@Component({
  selector: 'app-input-content',
  templateUrl: './input-content.component.html',
  styleUrls: ['./input-content.component.css']
})
export class InputContentComponent implements OnInit {

  myGroup = new FormGroup({
    date: new FormControl(''),
  })

  constructor(private route: Router, private ageCalculatorService: AgeCalculatorService) { }

  ngOnInit(): void {
  }

  calculate(){
    this.ageCalculatorService.ageCalculator()
  }

  setDate(){
    this.ageCalculatorService.setDate(this.myGroup.value.date)
  }

}
