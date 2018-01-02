// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router/routes'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(MintUI)

VueRouter.prototype.goBack = function() {
  this.isBack = true
  window.history.go(-1)
}
/* eslint-disable no-new */
const router = new VueRouter({
  routes,
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: to.meta.savedPosition || 0
      }
    }
  }
})

router.beforeEach((to, from, next) => {
  if (from.meta.keepAlive) {
    from.meta.savedPosition = document.body.scrollTop
  }
  next()
})

new Vue({
  el: '#app',
  router,
  mounted() {
    console.log('router====>', this)
  },
  data() {
    return {
      EventBus: new Vue()
    }
  },
  template: '<App/>',
  components: { App }
})
