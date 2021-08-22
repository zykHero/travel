import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';

import { FootprintRoutingModule } from './footprint-routing.module';
import { FootprintMainPageComponent } from './footprint-main-page/footprint-main-page.component';
import { MapComponent } from './map/map.component';
import { TabelComponent } from './tabel/tabel.component';
import { FootprintService } from './footprint.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
@NgModule({
  declarations: [FootprintMainPageComponent, MapComponent, TabelComponent],
  imports: [
    CommonModule,
    FootprintRoutingModule,
    NzTableModule,
    NzButtonModule,
    NzIconModule,
    NzFormModule,
    NzDatePickerModule,
    FormsModule,
    ReactiveFormsModule,
    NzModalModule,
    NzInputModule,
    NzTabsModule
  ],
  providers:[FootprintService]
})
export class FootprintModule { }
