import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  isVisible: boolean = false;
  isOkLoading: boolean = false;
  _isShowRegisterModel: boolean = false;
  isDisabledButton: boolean = false;
  validateForm: FormGroup;
  configLabel:object = {
    name: this.translate.instant('login.name'),
    password: this.translate.instant('login.password'),
    confirmPwd: this.translate.instant('login.confirmPwd')  
  };
  modelTitle: string = this.translate.instant('login.register');
  @Input() get isShowRegisterModel() {
    return this._isShowRegisterModel;
  }
  set isShowRegisterModel(value: boolean) {
    this._isShowRegisterModel = value;
    if (value) {
      this.resetForm();
    }
  }
  @Output() closeRegisterModelEvent:any = new EventEmitter();
  constructor(private fb: FormBuilder, private translate: TranslateService, private loginService: LoginService) { }

  ngOnInit() {
    this.initFormValue();
  }


  handleOk(): void {
    [this.isOkLoading,this.isDisabledButton] = [true,true];
    this.loginService.registerUser(this.validateForm.value).subscribe(()=>{
      [this.isOkLoading,this.isDisabledButton] = [false,false];
      this.closeModelCallback();
    },()=>{
      [this.isOkLoading,this.isDisabledButton] = [false,false];
    });
  }

  handleCancel(): void {
    this.isShowRegisterModel = false;
    this.closeRegisterModelEvent.emit();
  }

  updateConfirmValidator() {
    this.validateForm.controls.confirmPwd.updateValueAndValidity();
  }

  private initFormValue() {
    this.validateForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPwd: ['',[Validators.required, this.confirmationValidator]]
    });
  }

  private confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  private resetForm(): void {
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

  private closeModelCallback() {
    this.isShowRegisterModel = false;    
    this.closeRegisterModelEvent.emit();
  }
}
