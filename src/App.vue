<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ul>
      <li v-for="(good,index) in goods" :key="good.id">
        <span>{{good.text}}</span>
        <span>￥{{good.price}}</span>
        <el-button @click="addGood(index)">添加购物车</el-button>
      </li>
    </ul>
    <!--购物车-->
    <Cart :name="name"></Cart>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Cart from './components/Cart.vue'

export default {
  name: 'app',
  data(){
    return {
      name:'vue购物车',
      goods:[]
    }
  },
  components: {
    HelloWorld, Cart
  },
  async created(){
    try{
      const res=await this.$axios.get('/api/goods');
      console.log(res);
      this.goods=res.data.data;
    }catch(error){
      //错误处理
    }
  },
  methods:{
    addGood(i){
      const good=this.goods[i];
      this.$bus.$emit('addCart',good);
    }
  }

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
