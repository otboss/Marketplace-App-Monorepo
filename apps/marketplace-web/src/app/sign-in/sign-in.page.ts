import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RouteMapper } from 'src/model/RouteMapper';
import { SignInService } from './sign-in.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { CookieFields } from 'src/model/CookieFields';
import { FormBuilder, FormGroup, ValidationErrors } from '@angular/forms';
import { FormControl } from '@angular/forms';
import AsyncState from 'src/model/AsyncState';

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
  isSubmitting: boolean = false

  

  private subscriptions: Array<Subscription> = []
  regForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor(private signInService: SignInService, private cookieService: CookieService, private router: Router) { }


  
  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscriptions.forEach(subscription => subscription.unsubscribe())
  }

  typeof(val: any){
    return typeof(val)
  }

  form = {
    values: {
      email: "",
      password: ""
    },
    errors: {
      email: <string | undefined>"",
      password: <string | undefined>"",
    },
  }

  submissionAttempted: boolean = false

  updateErrors(){
    this.form.errors = this.signInService.signInValidator.validate(this.form.values) as typeof this.form.values
  }

  async handleSignIn(){
    this.updateErrors()
    if(Object.keys(this.form.errors).length === 0){
      // TODO: Refine this method
      this.isSubmitting = true
      try{
        const response: string = await new Promise((resolve, reject) => {
          let request = this.signInService.signIn$(this.email, this.password).subscribe(response => {
            // TODO: 
            if(response.token === undefined){
              reject(response)
              return
            }
            
            request.unsubscribe()
            resolve(response.token)
          })
        })

        this.cookieService.set(CookieFields.authToken, response)

        this.router.navigateByUrl(RouteMapper.home)
      }
      catch(err){

      }
      this.isSubmitting = false
    }
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
