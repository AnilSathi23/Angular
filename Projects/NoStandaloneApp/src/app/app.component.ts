import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  //title = 'NoStandaloneApp';
  firstname='Anil';
  lastname='sathi';
  
  //property binding
  isDisabled=false;
  title ="Binding Type";
  classtype ="text-danger";
  simple ="Simplilearn";
  image ="./assets/img1.jpg";

  title1="Event Binding";
  Clickme(event: any){
    alert("Welcome to Simplilearn");
  }

  title2="data-bind";
  value="";
  clearValue(){
    this.value="";
  }
}
