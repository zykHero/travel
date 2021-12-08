import { Component, OnInit,Input, AfterViewInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

// import 'tinymce';
@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.less']
})
export class DiaryComponent implements OnInit,AfterViewInit, OnDestroy {

  emptyDiaryInfo: string = this.translate.instant('diary.emptyDiartInfo');
  emptyDataList: any[] = [];
  isShowDiatyEditor: boolean = false;
  isShowEmptyDiatyInfo: boolean = false;

  constructor(public translate: TranslateService) { }

  ngOnInit() {
    this.isShowEmptyDiatyInfo = this.emptyDataList.length ===0;
  }

  ngAfterViewInit() {
    
  }

  ngOnDestroy() {
    // tinymce.remove(this.editor);
  }

  startWriteDiaty() {
    this.isShowDiatyEditor = true;
    this.isShowEmptyDiatyInfo = false;
  }



}
