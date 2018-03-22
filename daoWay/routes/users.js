var express = require('express');
var router = express.Router();

const Models=require("../models/index");
const ShopModel = Models("shop")
const cityModel = Models("city")
const ServiceModel =  Models("service")
const ItemModel =  Models("item")
const CommentModel =  Models("comment")
const DetailModel =  Models("detail")

router.get("/getShops",function(req,res){
    console.log(123);
    ShopModel.find({},function (err, shops) {
        if(!err){
            res.send({shops:shops})
        }
    })
})

router.get("/getCities",function(req,res){
    cityModel.find({},function (err, city) {
        if(!err){
            res.send({city:city})
            console.log(city);
        }
    })
})

router.get('/getService',function (req,res) {
    ServiceModel.find({},function(err,service){
        if(!err){
            res.send({service:service})
        }
    })
})

router.get('/getServiceItem', function (req, res) {
    const id = req.query.id
    ItemModel.findOne({id:id}, function (err, item) {
        if(!err){
            res.send({item:item})
        }
    })
})

router.get('/getComments', function (req, res) {
    const page = req.query.page

    //限制每页10条，每次查找跳过（page-1）*10条
    //exec - execute执行函数
    CommentModel.find({}).limit(10).skip((page-1)*10).exec(function (err, comments) {
        if(!err){
            res.send({comments:comments})
        }
    })
})

router.get('/getDetail', function (req, res) {
    DetailModel.find({}, function (err, detail) {
        if(!err){
            res.send({detail:detail})
        }
    })
})

module.exports = router;
