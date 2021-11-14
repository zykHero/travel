import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { TranslateModule } from '@ngx-translate/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterModule } from '@angular/router';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    TranslateModule,
    NzIconModule,
    RouterModule,
    NzAvatarModule,
    NzDropDownModule
  ]
})
export class MenuFrameModule { }
