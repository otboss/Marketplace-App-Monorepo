import { Injectable } from '@angular/core';
import { Validator } from 'fluentvalidation-ts';

type SignInPageFields = {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class SignInValidatorService extends Validator<SignInPageFields>{

  constructor() { 
    super()

    this.ruleFor("email")
      .notEmpty()
      .withMessage("This field is required")
      .maxLength(255)
      .withMessage("Please enter a valid email address")
      .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      .withMessage("Please enter a valid email address")

    this.ruleFor("password")
      .notEmpty()
      .withMessage("This is required field")
      .matches(/(?=.*[A-Z].)/)
      .withMessage("Password should have at least 1 uppercase letter")
      .matches(/(?=.*[!@#$&*])/)
      .withMessage("Password should have at least 1 special character")      
      .matches(/(?=.*[0-9])/)
      .withMessage("Password should have at least 1 number")
      .minLength(7)
      .withMessage("Password must be at least 6 characters")
  }
}
