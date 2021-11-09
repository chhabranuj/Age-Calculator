import { Component, OnInit } from '@angular/core';
import { AgeCalculatorService } from 'src/app/age-calculator.service';
import { InputContentComponent } from '../input-content/input-content.component';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

  constructor(private ageCalculatorService: AgeCalculatorService) { }

  ngOnInit(): void {
  }

  calculate(){
    this.ageCalculatorService.ageCalculator()
  }

}
