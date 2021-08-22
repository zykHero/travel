import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MapComponent } from '../map/map.component';
import { TabelComponent } from '../tabel/tabel.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FootprintService } from '../footprint.service';
import { ItemData } from './footproint-main-page';

declare var BMapGL: any;
@Component({
  selector: 'app-footprint-main-page',
  templateUrl: './footprint-main-page.component.html',
  styleUrls: ['./footprint-main-page.component.less']
})
export class FootprintMainPageComponent implements OnInit, AfterViewInit {
  @ViewChild('mapComponent', { static: false }) mapComponent: MapComponent;
  viewType: string = 'map';
  validateForm: FormGroup;
  isVisible: boolean = false;
  submitLoading: boolean = false;
  checked: boolean = false;
  customKeyName: object = {
    map: 'map',
    grid: 'grid'
  };
  columns: Array<object> = [
    { name: '城市' },
    { name: '地址' },
    { name: '时间' },
    { name: '天气' },
    { name: '驴友' }
  ];
  data: Array<ItemData> = [];
  listOfSelection: Array<object> = [];
  setOfCheckedId = new Set<number>();
  travelCity: string = '';
  mapCacheComponent: any;

  constructor(private fb: FormBuilder, private footprintService: FootprintService) { }

  ngOnInit() {
    this.initFormValue();
    this.getData();
  }

  ngAfterViewInit() {
    this.mapCacheComponent = this.mapComponent;
  }

  switchViewType(type) {
    this.viewType = type
  }

  submitForm(): void {
    let submitValue = Object.assign(this.validateForm.value, { city: this.travelCity });
    this.updateValidity();
    if (this.validateForm.invalid) {
      return;
    }
    console.log(submitValue)
    this.mapCacheComponent.clearFlagPoint();
    this.submitLoading = true;
    this.footprintService.createTraveRecords(submitValue).subscribe(res => {
      this.submitLoading = false;
      this.closeWindow();
      // todo 后台把下发后的表格最新数据带上来
      this.mapCacheComponent.setFlagPoint(res);
      //刷新地图 or 表格
    }, error => {
      this.submitLoading = false;
    });
  }

  showWindow() {
    this.isVisible = true;
  }

  closeWindow() {
    this.isVisible = false;
  }

  showWindowCallback() {
    this.resetForm();
    this.createMapAutoAddressInput();
  }

  onAllChecked(event) {
    console.log('所有all', event);
    this.data.forEach(ele => ele.isSelect = event);
    this.refreshCheckedStatus();
  }

  onItemChecked(item, event) {
    this.data.forEach(ele => {
      if (ele.index === item.index) {
        ele.isSelect = event;
      }     
    });
    this.refreshCheckedStatus();
    console.log('item:', event);
  }

  operationRecodrd(type) {
    switch(type) {
      case 'new':
      {
        this.showWindow();
        break;
      }
      case 'modify':
      {
        this.showWindow();
        break;
      }
      case 'delete':
      {
        //todo
        break;
      }
      default:break;
    }
  }

  private resetForm(): void {
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

  private createMapAutoAddressInput() {
    //建立一个自动完成的对象
    let autoComplete = new BMapGL.Autocomplete({ "input": "address", "location": this.mapCacheComponent.map });
    autoComplete.addEventListener("onconfirm", (e) => {    //鼠标点击下拉列表后的事件
      const value = e.item.value;
      const address = `${value.province}${value.city}${value.district}${value.street}${value.business}`;
      this.travelCity = value.city
      this.setFromValue('address', address);
    });
  }

  private setFromValue(key, value) {
    this.validateForm.value[key] = value;
  }

  private updateValidity() {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

  private initFormValue() {
    this.validateForm = this.fb.group({
      datePicker: ['', [Validators.required]],
      address: ['', [Validators.required]],
      weather: '',
      travelCompanion: ''
    });
  }

  private getData() {
    this.data = this.footprintService.getRravelData();
    this.data.forEach((ele, index) => ele['index'] = index);
  }

  private refreshCheckedStatus(): void {
    this.checked = this.data.every(item => item.isSelect === true);
    // this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
  }

}
