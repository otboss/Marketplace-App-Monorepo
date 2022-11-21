import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RouteMapper } from 'src/model/RouteMapper';
import { SignInService } from './sign-in.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { CookieFields } from 'src/model/CookieFields';

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

  signInResponse?: {token: string}

  private subscriptions: Array<Subscription> = []

  constructor(private signInService: SignInService, private cookieService: CookieService, private router: Router,) { }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscriptions.forEach(subscription => subscription.unsubscribe())
  }

  private validateSignInCredentials(): Array<{field: string, errorMessage: string}> {
    // TODO: Research field validation angular
    // TODO: Research FluentValidation Syntax
    // TODO: Complete this method
    return []
  }

  handleSignIn(){
    const errors = this.validateSignInCredentials()
    if (errors.length > 0){
      for(let error of errors){

      }      
      return
    }
    let subscription: Subscription
    new Promise((resolve, reject) => {
      subscription = this.signInService.signIn$(this.email, this.password).subscribe(response => {
        // TODO: 
        if(response.token === undefined){
          reject(response)
          return
        }
        this.cookieService.set(CookieFields.authToken, response.token)
        resolve(response)
      })
    }).then(() => {
      this.router.navigateByUrl(RouteMapper.home)
    }).catch(() => {
      // TODO: Display appropiate error message
      
    }).finally(() =>{
      subscription.unsubscribe()
    })

  }

  handleSignUp(){
    // TODO:   
  }

  handleSignOut(){
    // TODO: 
  }

  handleForgotPassword(){
    // TODO: 
  }

}
