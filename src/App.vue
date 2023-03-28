<template>
  <div id="app">
    <div class="tab border-1px" >
<!--      1.使用router-link 组件来导航-->
<!--      2.通过传入to 属性指定路径-->
<!--      router-link默认会被渲染成一个<a>标签-->
      <router-link class="tab-item" to="/Goods">商品</router-link>
      <router-link class="tab-item" to="/Comments">评论</router-link>
      <router-link class="tab-item" to="/Seller">商家</router-link>
    </div>
<!--    <img src="./assets/logo.png">-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
