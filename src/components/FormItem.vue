<template>
    <div>
        <!--接收label值-->
        <label v-if="label">{{label}}：</label>
        <!--准备槽位-->
        <div style="display: inline-block">
            <slot></slot>
            <!--放错误信息-->
            <p v-if="validateStatus" class="error">{{errorMessage}}</p>
        </div>
    </div>
</template>

<script>
    import schema from 'async-validator';
    export default {
        inject:['form'],//注入form，获取model+rules
        name: "FormItem",
        props:['prop','label'],
        data() {
            return {
                validateStatus:'',
                errorMessage: ''
            }
        },
        created(){
            this.$on('validate',this.validate)
        },
        mounted(){
            //挂载到form上时，派发一个添加事件
            if(this.prop) {//prop存在的时候才去校验，不存在则不校验
                this.$parent.$emit('formItemAdd',this)
            }

        },
        methods: {
            //校验库：async-validator
            validate(value) {
                //此处的value是子组件传过来的
                //返回一个promise对象
                return new Promise(resolve => {
                    //校验当前项  依赖async-validator
                    //[this.prop]：ES6计算属性的写法
                    const descriptor={
                        [this.prop]:this.form.rules[this.prop]
                    };//校验规则

                    //创建schema实例
                    const validator=new schema(descriptor);
                    validator.validate({[this.prop]:this.form.model[this.prop]},errors=>{
                        if(errors) {
                            //校验失败
                            this.validateStatus='error';
                            this.errorMessage=errors[0].message;

                            resolve(false);//校验失败
                        }else {
                            this.validateStatus='';
                            this.errorMessage='';

                            resolve(true);//校验成功
                        }
                    })
                });
            }
        },
    }
</script>

<style scoped>
    .error {
        color: red;
    }
</style>