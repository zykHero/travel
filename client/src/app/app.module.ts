import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';
import zh from '@angular/common/locales/zh';
import en from '@angular/common/locales/en';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import{ TranslateService } from '@ngx-translate/core';

import { LoginModule } from './login/login.module';

import { HttpRequestInterceptService } from './common/service/http-client/http-request-intercept.service';
import { HttpResponseInterceptService } from './common/service/http-client/http-response-intercept.service';
import { appInitializerFactory } from './common/appInitializer';
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
    LoginModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateHttpLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptService, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: HttpResponseInterceptService, multi: true},
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [TranslateService, Injector], //params
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
