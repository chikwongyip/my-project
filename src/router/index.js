import Vue from 'vue'
import Router from 'vue-router'
import Comments from "../components/Comments";
import Goods from "../components/Goods";
import seller from "../components/Seller";
import comments from "../components/Comments";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Goods',
      name: 'Goods',
      component: Goods
    },
    {
      path:"/Comments",
      name:"Comments",
      component:comments
    },
    {
      path:"/Seller",
      name:"seller",
      component:seller
    }
  ]
})
