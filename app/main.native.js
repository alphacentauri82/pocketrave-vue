import Home from './components/Home.native.vue'
import Create from './components/Create.native.vue'
import './styles'
import VueRouter from 'vue-router'
import Vue from  'nativescript-vue'

//const Vue = require('nativescript-vue');


Vue.use(VueRouter);

const router = new VueRouter({
  pageRouting: true,
  routes:[
      {path: '/home', component: Home},
      {path: '/create', component: Create},
      {path: '*', redirect: '/home'}
  ]
})

router.replace('/home');

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = TNS_ENV === 'production'

new Vue({
  router,
  render: h => h('frame', [h(Home)])
}).$start()
