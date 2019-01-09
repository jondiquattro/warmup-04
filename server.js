'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;



app.use(express.json());

app.use((req,res,next)=>{
   console.log(req.method, req.path);
   next();
})

app.get('/', (req,res,next)=>{
   res.send('hello')
   
});

app.post('/save', (req,res,next)=>{
   res.send({resonse: "saved your fake file!"});
})

app.get('/public', (req,res,next)=>{
   
})













app.listen(PORT, () => console.log(`Listening on ${PORT}`))