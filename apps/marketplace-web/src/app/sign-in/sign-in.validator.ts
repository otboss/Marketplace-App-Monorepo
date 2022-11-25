import { Validator } from 'fluentvalidation-ts';


type SignInPageFields = {
    email: string;
    password: string;
}


class SignInValidator extends Validator<SignInPageFields> {
    constructor() {
        super();
        
        this.ruleFor("email")
            .notEmpty()
            .maxLength(255)
            .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        
        this.ruleFor("password")
            .notEmpty()
            .minLength(6)
            .matches(/^(?=.*[A-Z].)(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z])$/)
      }
}