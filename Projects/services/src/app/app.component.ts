import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private calculateService= inject(CalculatorService);
  totalValue = this.calculateService.add(234,556);
  posts:any;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'servicePractice';
}
