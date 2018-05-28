<template>
    <div class="about">
        <my-banner :Mytype="'about'"></my-banner>
        <div class="row clearfix product-box">
            <div class="menu-ul">
                <router-link to="/about/company">公司</router-link>
                <router-link to="/about/media">媒体</router-link>
                <router-link to="/cooperation">合作</router-link>
            </div>
        </div>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import banner from './banner';
    export default {
        name: "about",
        components:{
            'my-banner':banner
        }
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s ease;
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>