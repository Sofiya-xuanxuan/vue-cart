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
    <!--实现购物车-->
    <cart :name="name"></cart>

    <!--实现数据双向绑定-->
    <k-input v-model="someValue"></k-input>{{someValue}}


    <!--实现插槽-->
    <k-slot>
      <template slot="head">
        <h1>head</h1>
      </template>
      <h4>content....</h4>
      <template slot="foot">
        <h5>foot</h5>
      </template>
    </k-slot>

    <!--设计公用组件-->
    <!--element中的form-->
    <e-form></e-form>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Cart from './components/Cart.vue'
import KInput from './components/Input.vue';
import EForm from './components/Form.vue';
import KSlot from './components/Slot.vue';

export default {
  name: 'app',
  data(){
    return {
      name:'vue购物车',
      goods:[],
      someValue:'some value'
    }
  },
  components: {
    HelloWorld,Cart,KInput,EForm,KSlot
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
  text-align: center;
}
</style>
