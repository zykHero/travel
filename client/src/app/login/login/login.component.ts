import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { LoginService } from '../login.service';
import { NzMessageService } from 'ng-zorro-antd/message';
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
  disabledSubimtBtn: boolean = false;
  isShowRegisterModel: boolean = false;

  constructor(private fb: FormBuilder, public translate: TranslateService, private loginService: LoginService,
    private nzMessageService: NzMessageService, private router:Router) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  submitForm(): void {
    this.disabledSubimtBtn = true;
    this.router.navigateByUrl('/main/footprint');
    this.loginService.submitLogin(this.validateForm.value).subscribe(res => {
      this.disabledSubimtBtn = false;
    }, () => {
      this.disabledSubimtBtn = false;
    });
  }

  startRegister() {
    this.isShowRegisterModel = true;
  }

  watchCloseRegister () {
    this.isShowRegisterModel = false;
  }

}
