import Vue from 'vue';
import VueRouter from 'vue-router';
import vueResource from 'vue-resource';
import components from './components/index.js';
//import VueCookie from 'vue-cookie';
import routes from "./routers.js";
import "normalize.css";
import "./assets/less/common.less";
import FastClick from 'fastclick';
//Vue.use(VueCookie);
Vue.use(VueRouter);
Vue.use(vueResource);

//初始化组件,并以前缀lj-命名
Object.keys(components).forEach((key) => {
    var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
    Vue.component(`lj${name}`, components[key])
});
const route = new VueRouter({
    routes
});
FastClick.attach(document.body);
new Vue({router:route}).$mount('#app');