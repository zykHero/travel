import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';
import zh from '@angular/common/locales/zh';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { HttpRequestInterceptService } from './common/service/http-client/http-request-intercept.service';
import { HttpResponseInterceptService } from './common/service/http-client/http-response-intercept.service';

registerLocaleData(zh);
export function createTranslateHttpLoader(http: HttpClient) {
  //请求国际化文件，资源文件放在/assets/lang/下，类型是json文件
  return new TranslateHttpLoader(http, '../assets/lang/', '.json');
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IconsProviderModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateHttpLoader),
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptService, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: HttpResponseInterceptService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
