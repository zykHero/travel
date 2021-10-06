import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppURL } from '../common/const/app.url';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  submitLogin(params):Observable<any> {
    
    return this.http.post(AppURL.login, params);
    
  }

}
