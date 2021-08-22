import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppURL } from '../common/const/app.url';
@Injectable({
  providedIn: 'root'
})
export class FootprintService {
  travelData: Array<any>=[];
  constructor(private http:HttpClient,) { }

  getRravelData() {
    return [
      {
        city: '桂林市',
        address: '桂林市象山景区',
        time: '2021-4-2',
        weather: '阴',
        accompanyer: '老婆'
      },
      {
        city: '桂林市',
        address: '桂林市穿山景区',
        time: '2021-4-2',
        weather: '阴',
        accompanyer: '老婆'
      },
      {
        city: '桂林市',
        address: '桂林市日月双塔文化公园',
        time: '2021-4-2',
        weather: '阴',
        accompanyer: '老婆'
      },
      {
        city: '桂林市',
        address: '桂林市银子岩风景区',
        time: '2021-4-3',
        weather: '阴',
        accompanyer: '老婆'
      },
      {
        city: '桂林市',
        address: '桂林市杨堤码头',
        time: '2021-4-3',
        weather: '阴',
        accompanyer: '老婆'
      },
      {
        city: '桂林市',
        address: '桂林市九马画山',
        time: '2021-4-3',
        weather: '阴',
        accompanyer: '老婆'
      },
      {
        city: '桂林市',
        address: '桂林市20元人民币背景观景台',
        time: '2021-4-3',
        weather: '阴',
        accompanyer: '老婆'
      },
      {
        city: '桂林市',
        address: '桂林市兴坪古镇',
        time: '2021-4-3',
        weather: '阴',
        accompanyer: '老婆'
      },
      {
        city: '桂林市',
        address: '阳朔西街',
        time: '2021-4-3',
        weather: '阴',
        accompanyer: '老婆'
      },
      {
        city: '桂林市',
        address: '桂林千古情景区',
        time: '2021-4-3',
        weather: '阴',
        accompanyer: '老婆'
      },
      {
        city: '桂林市',
        address: '8号码头',
        time: '2021-4-4',
        weather: '阴',
        accompanyer: '老婆'
      }
    ];
  }

  createTraveRecords(paramse):Observable<any> {
    paramse['id'] = 123;
    return this.http.post(AppURL.footPrint.createFootPrint, paramse);
  }
}
