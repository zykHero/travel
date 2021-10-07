import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { TranslateModule } from '@ngx-translate/core';
import { NzModalModule } from 'ng-zorro-antd/modal';
@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    NzIconModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    FormsModule, 
    ReactiveFormsModule,
    NzGridModule,
    NzCheckboxModule,
    TranslateModule,
    NzModalModule
  ]
})
export class LoginModule { }
