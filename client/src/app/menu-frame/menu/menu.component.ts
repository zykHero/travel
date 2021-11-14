import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  isCollapsed = false;
  userName: string = 'zykzykzyzzykzykz'
  constructor() { }

  ngOnInit() {
  }

  logout() {
    console.log('弹出退出二次确认框 ')
  }

}
