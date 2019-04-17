<template>
    <div id="formName">
        <!--element组件-->
        <h1>element-form</h1>
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
            <el-form-item label="用户名" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pwd">
                <el-input v-model="form.pwd" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submit">提交</el-button>
            </el-form-item>
        </el-form>

        <!--开课吧表单组件-->

        <!--
        form的作用：绑定数据类型、添加校验规则
        formitem：label、prop-校验和显示错误
        input: input数据发生改变后，要通知formitem去做校验
        -->

        <!--完整的form组件-->
        <h1>k-form完整组件</h1>
        <k-form :model="form" :rules="rules" ref="form2">
            <k-form-item label="用户名" prop="name">
                <k-input v-model="form.name"></k-input>
            </k-form-item>
            <k-form-item label="密码" prop="pwd">
                <k-input v-model="form.pwd" type="password"></k-input>
            </k-form-item>
            <k-form-item>
                <el-button type="primary" @click="submit2">提交</el-button>
            </k-form-item>
        </k-form>

        {{form}}
    </div>
</template>

<script>
    import KInput from './Input.vue';
    import KFormItem from './FormItem.vue';
    import KForm from './Form.vue';
    export default {
        name: "Form",
        components:{KInput,KFormItem,KForm},
        data() {
            return {
                form: {
                    name: '',
                    pwd: ''
                },
                rules: {
                    name: [
                        {required:true,message:'请输入姓名'},
                        {min:3,max:6,message:'长度在是-6位字符'}
                    ],
                    pwd:[
                        {required:true,message:'请输入密码'}
                    ]
                }
            }
        },
        methods: {
            submit() {
                this.$refs.form.validate(valide=>{
                    if(valide) {
                       alert('提交登录！')
                    }else {
                        console.log('校验失败！')
                        return false;//阻止浏览器的默认提交，页面不会刷新
                    }
                })
            },
            submit2(){
                this.$refs.form2.validate(valide=>{
                    if(valide) {
                        alert('提交登录！')
                    }else {
                        console.log('校验失败！')
                        return false;//阻止浏览器的默认提交，页面不会刷新
                    }
                })
            }
        },
    }
</script>

<style scoped>

</style>