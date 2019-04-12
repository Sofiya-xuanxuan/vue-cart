module.exports={
    configureWebpack:{
        devServer:{
           before(app) {
               app.get('/api/goods',function(req,res) {
                   res.json({
                       code:0,
                       data:[
                           {id:1,text: 'web全栈架构师', price: 1000},
                           {id:2,text: 'Python架构师', price: 1000},
                           {id:3,text: '百万年薪架构师', price: 1000}
                       ]
                   })
               })
           }
        }
    }
}