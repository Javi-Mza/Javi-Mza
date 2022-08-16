const { dir } = require('console');
const express=require('express');
const { dirname } = require('path');
const app=express();

const path=require('path')

app.use(express.static(path.resolve(__dirname,"./public")));

app.listen(3003,()=>{
    console.log('Servidor cooriendo en http://localhost:3003 ')
})
app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
})

app.post('/searcher',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
})

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});
app.get('/register', (req,res)=>{
    res.sendFile(__dirname +'/views/register.html');
});
app.post('/register',(req,res)=>{
    res.sendFile(path.resolve(__dirname+'./views/home/html'))
})
