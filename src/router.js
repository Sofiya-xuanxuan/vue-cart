import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

//插件挂载
Vue.use(Router)


//hash模式:页面不会刷新,不利于搜索引擎，hash后面的东西，浏览器不会去关注

//history模式：历史记录模式,搜索引擎也比较好，url可读性更强，使用nginx部署的时候，需要服务器特殊配置

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    {path: '/', name: 'home', component: Home},
    {path: '/about', name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
