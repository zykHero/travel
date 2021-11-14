import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { GlobalService } from '../common/service/global.service';
import { AppURL } from '../common/const/app.url';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,private translate: TranslateService, private global:GlobalService) { }

  submitLogin(params):Observable<any> {
    params['password'] = this.global.encryption(params.password);
    return this.http.post(AppURL.login, params);
  }

  registerUser(params): Observable<any> {
    params['password'] = this.global.encryption(params.password);
    params['confirmPwd'] = this.global.encryption(params.confirmPwd);
    return this.http.post(AppURL.register, params);
  }

}
