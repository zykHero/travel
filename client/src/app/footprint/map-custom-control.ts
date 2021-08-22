declare var BMapGL: any;
declare var BMAP_ANCHOR_TOP_LEFT, BMAP_ANCHOR_TOP_RIGHT: any;
export class MapCustomControl {
    defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
    defaultOffset = new BMapGL.Size(20, 20);
    constructor() {}
    initialize = function(map) {
        let div = document.createElement('div');
        div.appendChild(document.createTextNode('放大2级'));
        div.style.cursor = "pointer";
        div.style.padding = "7px 10px";
        div.style.boxShadow = "0 2px 6px 0 rgba(27, 142, 236, 0.5)";
        div.style.borderRadius = "5px";
        div.style.backgroundColor = "white";
        // 绑定事件,点击一次放大两级
        div.onclick = function(e){
            map.setZoom(map.getZoom() + 2);
        }
        // 添加DOM元素到地图中
        map.getContainer().appendChild(div);
        // 将DOM元素返回
        return div;
    }
}
