//使用先下载express
const express = require('express')
const qs = require("querystring")

const app = express()


app.get('/', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin","*")
    res.send('Hello World')
})

app.listen(3000,(err)=>{
    if (!err){console.log("服务器启动成功端口号3000");}
    else {console.log(err);}
})

