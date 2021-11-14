import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  isCollapsed = false;
  userName: string = 'zykzykzyzzykzykz'
  logoutConfirmTitle: string = '确定退出吗？';
  constructor(private router: Router, private modal: NzModalService) { }

  ngOnInit() {
  }

  showLogoutConfirm() {
    this.modal.confirm({
      nzTitle: this.logoutConfirmTitle,
      nzOnOk: () => this.logout()
    });
  }

  private logout() {
    this.router.navigateByUrl('/login');
  }

}
