<template>
    <form action="">
        <slot></slot>
    </form>
</template>

<script>
    export default {
        name: "Form",
        provide(){//将表单的实例传递给后代
            return {
                form:this//后代通过this，无论何时都可以拿到父组件的model、rules
            }
        },
        props:{
            model:{
                type:Object,
                required:true
            },
            rules:{
                type: Object
            }
        },
        data() {
            return {
                fields:[]
            }
        },
        created(){
            //缓存所有需要校验的项
            this.$on('formItemAdd',item=>this.fields.push(item))
        },
        methods: {
            async validate(callback) {
                //得到一个promise组成的数组（将formitem数组转换为validate()返回的promise数组）
                //此处的ite是子组件传来的this
                const tasks=this.fields.map(item=>item.validate())
                //获取所有结果统一处理(所有的结果处理完了，再去处理)
                let ret=true;
                const results=await Promise.all(tasks);
                results.forEach(valid=>{
                    if(!valid) {
                        //只要有一个时报
                        ret=false;
                    }
                })
                callback(ret);//回调将结果告诉
            }
        },
    }
</script>

<style scoped>

</style>