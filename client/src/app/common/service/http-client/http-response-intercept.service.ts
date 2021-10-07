import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpErrorResponse, HttpClient, HttpHandler, 
  HttpEvent, HttpInterceptor} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root'
})
export class HttpResponseInterceptService implements HttpInterceptor {
  customErrorText:any = {

  };
  constructor(private http: HttpClient, private nzMessageService: NzMessageService) { }
  intercept(request: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>>{
    return next.handle(request).pipe(
      catchError((error)=>{
        //todo t统一处理错误
       return throwError(error);
      })
    )
  }
}
