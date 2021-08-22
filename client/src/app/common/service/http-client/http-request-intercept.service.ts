import { Injectable } from '@angular/core';
import { HttpRequest, HttpClient, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpRequestInterceptService implements HttpInterceptor {

  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //todo add  token
    let requestParams = {
      headers: request.headers.set('token', 'zyk')
    };
    return next.handle(request.clone(requestParams));
  }
}
