<template>
    <div id="allmap" style="width: 1200px;height: 525px" ></div>
</template>

<script>
    // import BMap from 'BMap'
    export default {
        name: "BMapComponent",
        mounted(){
            const map = new BMap.Map("allmap");
            const point = new BMap.Point(113.310505,23.138298);
            setTimeout(()=>map.setZoom(20),1000)
            map.enableScrollWheelZoom(true);
            const marker = new BMap.Marker(point);  // 创建标注
            map.addOverlay(marker);              // 将标注添加到地图中
            map.centerAndZoom(point, 15);
            const opts = {
                width : 200,     // 信息窗口宽度
                height: 100,     // 信息窗口高度
                title : "勇往科技" , // 信息窗口标题
                enableMessage:true,//设置允许信息窗发送短息
                message:"亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~"
            }
            const infoWindow = new BMap.InfoWindow("地址：广州市越秀区东风东路745号紫园商务大厦6楼602", opts);  // 创建信息窗口对象
            marker.addEventListener("click", function(){
                map.openInfoWindow(infoWindow,point); //开启信息窗口
            });
        }
    }
</script>

<style scoped>

</style>