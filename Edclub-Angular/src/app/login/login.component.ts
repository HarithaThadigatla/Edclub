import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public signupform:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  signup()
  {
    this.signupform = true;
  }

  signin()
  {
    this.signupform = false;
  }

}
