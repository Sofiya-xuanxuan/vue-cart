<template>
    <div id="formName">
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

        <h1>k-form</h1>
        
    </div>
</template>

<script>
    export default {
        name: "Form",
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
            }
        },
    }
</script>

<style scoped>

</style>