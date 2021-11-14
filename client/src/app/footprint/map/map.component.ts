import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { FootprintService } from '../footprint.service';
import { MapCustomControl } from '../map-custom-control';
declare var BMapGL: any;
declare var BMAP_ANCHOR_TOP_LEFT, BMAP_ANCHOR_TOP_RIGHT: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit, AfterViewInit {
  @Input() data: [] = [];
  title = 'map';
  map: any;
  constructor(private footprintService: FootprintService) { }
  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.createMap();
  }

  createMap() {
    this.map = new BMapGL.Map('map');
    this.map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 11);
    this.map.enableScrollWheelZoom(true);
    this.setMapControl();
    this.setFlagPoint(this.data);
    // this.map.setMapStyleV2({
    //   styleId: 'c1d4bd7106e92f6a1bf8617ffdffa8e0'
    // });
  }

  // 添加标记点
  setFlagPoint(data) {
    let myGeo = new BMapGL.Geocoder();
    // 将地址解析结果显示在地图上，并调整地图视野
    // let data = this.footprintService.getRravelData();
    this.clearFlagPoint();
    data.forEach(ele => {
      myGeo.getPoint(ele.address, (point) => {
        if (point) {
          this.map.centerAndZoom(point, 5);
          let marker = new BMapGL.Marker(point);
          this.map.addOverlay(marker);
          let opts = {
            width: 0,
            height: 0,
            maxWidth: 300,
            title: '游记' // 信息窗口标题
          };
          let content = `地点：${ele.address}<br>时间：${ele.time}<br>天气：${ele.weather}<br>同行者：${ele.accompanyer}`;
          let infoWindow = new BMapGL.InfoWindow(content, opts);
          marker.addEventListener("click", () => {
            this.map.openInfoWindow(infoWindow, point); //开启信息窗口
          });
        } else {
          console.error('您选择的地址没有解析到结果！');
        }
      }, ele.city);
    });
  }

  clearFlagPoint() {
    this.map.clearOverlays();
  }

  private fullWindowSize() {
    let mapDOM: any = document.getElementById('map');
    if (mapDOM.requestFullscreen) {
      mapDOM.requestFullscreen();
    }
    else if (mapDOM.msRequestFullscreen) {
      mapDOM.msRequestFullscreen();
    }
    else if (mapDOM.mozRequestFullScreen) {
      mapDOM.mozRequestFullScreen();
    }
    else if (mapDOM.webkitRequestFullScreen) {
      mapDOM.webkitRequestFullScreen();
    }
  }

  //添加地图控件
  private setMapControl() {
    let scaleCtrl = new BMapGL.ScaleControl();  // 添加比例尺控件
    this.map.addControl(scaleCtrl);
    let zoomCtrl = new BMapGL.ZoomControl();  // 添加缩放控件
    this.map.addControl(zoomCtrl);
    // 添加城市列表控件
    let cityCtrl = new BMapGL.CityListControl({
      anchor: BMAP_ANCHOR_TOP_LEFT,
      offset: new BMapGL.Size(20, 10)
    });
    this.map.addControl(cityCtrl);
    let locationControl = new BMapGL.LocationControl({
      anchor: BMAP_ANCHOR_TOP_RIGHT,
      offset: new BMapGL.Size(20, 10)
    });
    this.map.addControl(locationControl);
  }


}
