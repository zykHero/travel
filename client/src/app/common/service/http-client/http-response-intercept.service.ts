import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpErrorResponse, HttpClient, HttpHandler, 
  HttpEvent, HttpInterceptor} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpResponseInterceptService implements HttpInterceptor {

  constructor(private http: HttpClient) { }
  intercept(request: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>>{
    return next.handle(request).pipe(
      catchError((error)=>{
        //todo t统一处理错误
       return throwError(error);
      })
    )
  }
}
