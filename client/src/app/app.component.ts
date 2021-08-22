import { Component } from '@angular/core';
import{ TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  constructor(public translate: TranslateService) {
    this.translate.use('zh');
  }
}
