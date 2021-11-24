import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DiaryRoutingModule } from './diary-routing.module';
import { DiaryComponent } from './diary/diary.component';
import { NgxTinymceModule } from 'ngx-tinymce';
import { NzResultModule } from 'ng-zorro-antd/result';
import { TranslateModule } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
@NgModule({
  declarations: [DiaryComponent],
  imports: [
    CommonModule,
    FormsModule,
    DiaryRoutingModule,
    NgxTinymceModule,
    NzResultModule,
    TranslateModule,
    NzButtonModule
  ]
})
export class DiaryModule { }
