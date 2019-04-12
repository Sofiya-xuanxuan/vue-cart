<template>
    <div id="cart">
        <h1>{{name}}</h1>
        <!--购物车列表-->
        <table border="1">
            <tr>
                <th>#</th>
                <th>课程名</th>
                <th>单价</th>
                <th>数量</th>
                <th>价格</th>
            </tr>
            <tr v-for="(c,index) in cart" :key="c.id" :class="{active:c.active}">
                <td>
                    <input type="checkbox" v-model="c.active">
                </td>
                <td>{{c.text}}</td>
                <td>{{c.price}}</td>
                <td>
                    <button @click="minus(index)">-</button>
                    {{c.count}}
                    <button @click="add(index)">+</button>
                </td>
                <td>￥{{c.price*c.count}}</td>
            </tr>
            <tr>
                <td></td>
                <td colspan="2">{{activeCount}}/{{count}}</td>
                <td colspan="2">￥{{total}}</td>
            </tr>
        </table>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "Cart",
        props: ['name'],
        data() {
            return {
                cart: JSON.parse(localStorage.getItem("cart")) || []
            }
        },
        created() {
            console.log(this.cart);
            //监听父组件添加商品事件
            this.$bus.$on('addCart', good => {
                //find方法：找到对应的项并返回
                const ret = this.cart.find(c => c.id == good.id);
                if (ret) {
                    ret.count += 1
                } else {
                    this.cart.push({
                        ...good,//将对象中的属性展开
                        count: 1,
                        active: true
                    })
                }
            })

        },
        methods: {
            minus(index) {
                const count = this.cart[index].count;
                if (count > 1) {
                    this.cart[index].count -= 1
                } else {
                    this.remove(index);
                }

            },
            add(index) {
                this.cart[index].count += 1
            },
            remove(index) {
                if (window.confirm('确定删除吗？')) {
                    this.cart.splice(index, 1)
                }
            }
        },
        computed: {
            activeCount() {
                //filter:留下符合条件的
                return this.cart.filter(c => c.active).length
            },
            count() {
                return this.cart.length
            },
            total() {
                let num = 0;
                this.cart.forEach(c => {
                    if (c.active) {
                        num += c.price * c.count
                    }
                })
                return num;
            }
        },
        watch: {
            cart: {
                handler(newVal,oldVal) {
                    console.log(oldVal);
                    localStorage.setItem("cart",JSON.stringify(newVal))
                },
                deep: true
            }
        }
    }
</script>

<style scoped>
    .active {
        color: red;
    }
    table {
        margin: 0 auto;
    }
</style>