import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private http: HttpClient) { }


  signIn$(email: string, password: string) {
    return this.http.post<{token: string}>(environment.backend.endpoints.signIn(), {email, password}, {
      headers:{
        "access-control-allow-origin": "*"
      },
      responseType: 'json',
    })
  }
}
