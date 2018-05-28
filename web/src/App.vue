<template>
  <div id="app" class="">
    <div class="web-head row clearfix">
      <div class="col-lg-4"><router-link to="/index"><span style="margin-right: 16px"><img src="./assets/images/logo.png"></span><span><img src="./assets/images/logo-2.png"></span></router-link></div>
      <div class="col-lg-8 menu-content">
        <router-link to="/index">首页</router-link>
        <router-link to="/about">关于</router-link>
        <router-link to="/experience" >体验</router-link>
        <router-link to="/recruitment" >招聘</router-link>
        <router-link to="/cooperation" >合作</router-link>
      </div>
    </div>
    <div class="web-body">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <div class="web-footer">
      <div class="web-bottom">
        <ul>
          <li><router-link to="/about/company">关于勇往</router-link></li>
          <li><router-link to="/experience">产品体验</router-link></li>
          <li><router-link to="/recruitment">加入我们</router-link></li>
          <li><router-link to="/cooperation">联系我们</router-link></li>
        </ul>
        <p class="copy">Copyright&copy; 广州勇往科技有限公司.All rights reserved.&nbsp;&nbsp;&nbsp;&nbsp;联系微信：wonderlive&nbsp;&nbsp;&nbsp;&nbsp;服务信箱：hello@wonder.wiki</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
  @import "assets/css/bootstrap.css";
  @import "assets/css/style.css";

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
