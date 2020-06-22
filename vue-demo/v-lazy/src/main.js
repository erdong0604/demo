import Vue from 'vue'
import App from './App.vue'
import LazyLoad from './components/LazyLoad';


Vue.use(LazyLoad,{
    default:'https://tva1.sinaimg.cn/large/007S8ZIlgy1gfyof9vr4mj3044032dfl.jpg'
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
