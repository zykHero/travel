import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DiaryRoutingModule } from './diary-routing.module';
import { DiaryComponent } from './diary/diary.component';
import { NgxTinymceModule } from 'ngx-tinymce';

@NgModule({
  declarations: [DiaryComponent],
  imports: [
    CommonModule,
    FormsModule,
    DiaryRoutingModule,
    NgxTinymceModule
  ]
})
export class DiaryModule { }
