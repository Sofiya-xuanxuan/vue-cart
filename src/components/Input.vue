<template>
    <!--实现数据双向绑定-->
    <div id="inputName">
        <input :type="type" :value="inputValue" @input="inputHandler" @blur="blurHandler">
    </div>
</template>

<script>
    import emitter from '../service/util.js';
    export default {
        name: "Input",
        mixins:[emitter],
        props:{
            value:{
                type:String,
                default:''//默认值
            },
            type:{
                type:String,
                default: 'text'
            }
        },
        data() {
            return {//单向数据流原则：组件内不能修改props属性
                inputValue: this.value
            }
        },
        methods: {
            //input事件
            inputHandler(e) {
                this.inputValue=e.target.value;
                //通知父组件值更新
                //此处通知的名称-input是不能做更改的，
                this.$emit('input',this.inputValue);
                //通知formitem做校验
                //让formitem自己去派发事件，则可以接收到数据的变化
                //为什么不让input自己去派发事件呢？因为在formitem中还是slot槽，根本没办法去接收数据
                this.dispatch('FormItem','validate',this.inputValue)
                //this.$parent.$emit('validate',this.inputValue)//将当前的值传出去
            },
            //blur事件
            blurHandler(e){
                this.inputValue=e.target.value;
                this.$emit('blur',this.inputValue);
                this.dispatch('FormItem','validate',this.inputValue)
            }
        },
    }
</script>

<style scoped>
    #inputName {
        margin-top: 20px;
    }
</style>