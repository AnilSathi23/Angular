import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePipe } from '@angular/common';
import { HelloPipe } from './hello.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DatePipe,HelloPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipepractice';
  public x = new Date(2024,1,3,1,1,1);

  students = [
    {
      studentId:1,
      name:"raghav",
      gender:0
    },
    {
      studentId:1,
      name:"Jinisha",
      gender:1
    },
    {
      studentId:2,
      name:"Madhav",
      gender:0
    }
  ]
}
