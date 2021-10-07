import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import { AppURL } from '../common/const/app.url';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,private translate: TranslateService) { }

  submitLogin(params):Observable<any> {
    return this.http.post(AppURL.login, params);
  }

  registerUser(params): Observable<any> {
    return this.http.post(AppURL.register, params);
  }

}
