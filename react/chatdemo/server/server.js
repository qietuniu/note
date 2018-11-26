const express = require('express')
const mongoose = require('mongoose')

//链接数据库,并且取chat集合
const DB_URL = 'mongodb://localhost:27017/chat'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function() {
    console.log('success')
})

//类似于表，mongo中有文档和字段的概念
const User = mongoose.model('user', new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    }
}))
//新增
//User.create({
//  name: 'xh',
//  age: 20
//}, function(err, doc) {
//  if(!err) {
//      console.log(doc)
//  } else {
//      console.log(err)
//  }
//})

//删除
//User.remove({
//  age: 18
//}, function(err, doc) {
//  if(!err) {
//      console.log(doc)
//  } else {
//      console.log(err)
//  }
//})

//更新
User.update({
    'name': 'xm'
}, {
    '$set': {
        age: 12
    }
}, function(err, doc) {
    if(!err) {
        console.log(doc)
    } else {
        console.log(err)
    }
})

//查找

const app = express()
app.get('/', function(req, res) {
    res.send('<h1>hello world</h1>')
})
app.get('/data', function(req, res) {
//  User.find({}, function(err, doc) {
//      res.json(doc)
//  })
//  User.find({'name':'xm'}, function(err, doc) {
//      res.json(doc)
//  })
    User.findOne({'name':'xm'}, function(err, doc) {
        res.json(doc)
    })
    //  res.json({name:'qtn', type:'ctx'})
})
app.listen(9093, function() {
    console.log("listening 9093")
})