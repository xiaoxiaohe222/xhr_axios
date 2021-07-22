//使用先下载express
const express = require('express')
const app = express()
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*")
})

app.get('/getProducts1', function (req, res) {
    res.send('getProducts1')
})

app.get('/getProducts2', function (req, res) {
    res.send('getProducts2')
})

app.listen(4000,(err)=>{
    if (!err){console.log("服务器启动成功端口号4000");}
    else {console.log(err);}
})