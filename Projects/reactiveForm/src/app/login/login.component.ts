import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormGroup, FormControl, Validators],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm:any=FormGroup;
  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }
  onSubmit() {
    // Handle form submission here
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      // Additional logic to authenticate user or 
      // perform other actions
    }
  }
}
