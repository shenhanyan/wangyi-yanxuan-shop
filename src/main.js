import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false  // 去掉不是生产环境的提示

new Vue({
  render: h => h(App), // 将App组件的对象界面渲染到页面上
  router, // 注册路由器
}).$mount('#app')


//  在 main.js 设置 html 跟字体大小
function initRem() {
  let cale = window.screen.availWidth > 750 ? 2 : window.screen.availWidth / 375
  window.document.documentElement.style.fontSize = `${100 * cale}px`
}

window.addEventListener('resize', function() {
  initRem()
})
