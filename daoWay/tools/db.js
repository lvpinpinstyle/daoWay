const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/daoWay",{useMongoClient:true});

mongoose.connection.on('open',function (err) {
    if(!err){
        console.log('数据库连接成功')
    }
    console.log(err)
})