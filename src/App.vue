<template>
  <div id="app">
    <img src='./assets/img/logo.png'></img>
    <transition name="router-fade" mode="out-in">
			<keep-alive>
			    <router-view v-if="$route.meta.keepAlive"></router-view>
			</keep-alive>
    </transition>
      {{$route.meta.keepAlive?11111111:222222222}}      
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
    console.log('$route', this.$route)
  }
}
</script>

<style>
/* 全局样式定义 */
* {
  padding: 0;
  margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  font-size: 12px;
}
a {
  color: #000;
  text-decoration: none;
}
ul,
ol {
  list-style: none;
}
i,
em {
  font-style: normal;
}
b,
strong {
  font-weight: normal;
}
a img {
  border: none;
}
img {
  vertical-align: top;
}
.clearfix:after {
  display: block;
  content: '';
  clear: both;
}
.clearfix {
  zoom: 1;
}
.f-l {
  float: left;
}
.f-r {
  float: right;
}
.hidden {
  display: none !important;
}
/* 路由过渡动画 */
.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity 0.3s;
}
.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}
</style>
