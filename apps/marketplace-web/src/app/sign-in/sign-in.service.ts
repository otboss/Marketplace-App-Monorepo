import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import requestBuilder from 'src/util/requests/request-builder';
import { SignInValidatorService } from './sign-in-validator.service';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private http: HttpClient, public signInValidator: SignInValidatorService) { }

  signIn$(email: string, password: string) {
    return requestBuilder.signInRequest(this.http, {
      email,
      password,
    })
  }
}
