import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RichTextEditorComponent } from './rich-text-editor/rich-text-editor.component';
import { NgxTinymceModule } from 'ngx-tinymce';


@NgModule({
  declarations: [RichTextEditorComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxTinymceModule
  ],
  exports: [RichTextEditorComponent]
})
export class RichTextEditorModule { }
