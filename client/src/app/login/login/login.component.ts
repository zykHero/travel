import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  nameText: string = this.translate.instant('login.name');
  pwdText: string = this.translate.instant('login.password');
  nameInfo: string = this.translate.instant('login.userNameInfo');
  pwdInfo: string = this.translate.instant('login.userPWDInfo');
  disabledSubimtBtn: boolean = true;


  constructor(private fb: FormBuilder, public translate: TranslateService, private loginService: LoginService) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  watchInput() {
    if (this.validateForm.value === null) {
      this.disabledSubimtBtn = true;
    } else {
      const valueArray = [];
      for (let key in this.validateForm.value) {
        valueArray.push(this.validateForm.value[key]);
      }
      const isExistEmptyValue = valueArray.some(ele => {
        return ele === '';
      });
      this.disabledSubimtBtn = isExistEmptyValue;
    }
  }

  submitForm(): void {
    this.disabledSubimtBtn = true;
    this.loginService.submitLogin(this.validateForm.value).subscribe(res => {
      this.disabledSubimtBtn = false;
    }, () => {
      this.disabledSubimtBtn = false;
    });
  }

}
