<template>
    <!--实现数据双向绑定-->
    <div id="inputName">
        <h1>数据双向绑定</h1>
        <input type="text" :value="inputValue" @input="inputHandler">
    </div>
</template>

<script>
    export default {
        name: "Input",
        props:{
            value:{
                type:String,
                default:''//默认值
            }
        },
        data() {
            return {//单向数据流原则：组件内不能修改props属性
                inputValue: this.value
            }
        },
        methods: {
            inputHandler(e) {
                this.inputValue=e.target.value;
                //通知父组件值更新
                this.$emit('input',this.inputValue)
            }
        },
    }
</script>

<style scoped>
    #inputName {
        margin-top: 20px;
    }
</style>