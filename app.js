const express = require('express');

const app = express();

app.use((req, res, next)=>{
    console.log(' Requ�te re�ue ! ');
    next();
})


app.use((req,res,next)=>{
    res.status(201);
    next();
})

app.use((req, res, next)=>{
    res.json({'message':'Votre requette a bien ete recus'});
    next();
})

app.use((req,res)=>{
    console.log(' R�ponse envoy�e avec succ�s ! ')
})

module.exports = app;

