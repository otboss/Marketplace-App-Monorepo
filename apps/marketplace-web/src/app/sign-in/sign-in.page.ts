import { Component, OnInit } from '@angular/core';
import { RouteMapper } from 'src/model/RouteMapper';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {


  isSignUp: boolean = false
  email: string = ""
  password: string = ""
  confirmationPassword: string = ""

  homeRoute: string = RouteMapper.home


  constructor() { }

  ngOnInit() {
  }


  private validateCredentials(){

  }

  handleSubmit(){
    
  }

}
