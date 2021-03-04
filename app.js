/*
SERVER CONNECT
var http= require('http')

http.createServer(function(req,res){

res.writeHead(200,{'Content-Type':'text/html'})    
res.end("Welcome Back F!!!")
//res.end()




}).listen(8080)
*/

/*
MODULE CREATION 
var calc= require('./calc.js')
result = calc.add(4,5)
subt = calc.sub(5,4)

console.log("the output is" + result)
console.log("the sub is" + subt)
*/

/*
READ A FILE
var fs = require('fs')

fs.readFile('calc.js','utf8',function(err,data){
    console.log(data)
})
*/
/*
WRITE/APPEND A FILE
var fs = require('fs')

fs.appendFile('calc.js','console.log("done")',function(err){
    console.log("data saved")
})
*/

/*
DELETE FILE
var fs=require('fs')
fs.unlink('calc1.js',function(err){
    console.log("deleted")
})
*/
/*
URL MAPPING USING EXPRESS JS
const express= require('express');

const app=express();

app.get('/',function(req,res){
    res.send("Hello world")
})

app.get('/alien',function(req,res){
    const id=req.query.id
    
    res.send('welcome back alien'+id)
})

app.get('/alien/:id',function(req,res){
    const id=req.params.id
    res.send("hey firdosh" + id)
})

app.listen(9000,function(req,res){
    console.log('Running..')
});
*/
