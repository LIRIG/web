<template>
    <div class="banner-size">
        <div class="product-box">
            <b-map-component></b-map-component>
            <div class="menu-ul">
                <router-link to="/about/company">公司</router-link>
                <router-link to="/about/media">媒体</router-link>
                <router-link to="/cooperation">合作</router-link>
            </div>
            <div class="contact-div">
                <div><h1>联系地址</h1><span>广州市<br>越秀区 东风东路745号 紫园商务大厦<br>6楼602</span></div>
                <div><h1>联系电话</h1><span>媒体合作:13800138000<br>广告合作:13800138000<br>商务合作:13800138000</span></div>
                <div><h1>联系邮箱</h1><span>媒体合作:kobe@wonder.wiki<br>广告合作:kobe@wonder.wiki<br>商务合作:kobe@wonder.wiki</span></div>
            </div>
        </div>
    </div>
</template>

<script>
    import BMapComponent from './BMapComponent';
    export default {
        name: "cooperation",
        components:{
            'b-map-component':BMapComponent
        }
    }
</script>

<style scoped>

</style>