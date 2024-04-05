const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Thing = require('./models/Things');
const { error } = require('console');
const app = express();

mongoose.connect('mongodb+srv://balo1001:raUXr3h05jx3Tahe@remetra.nvykegq.mongodb.net/',
{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log('Connexion a MongoDB reussie !'))
.catch(()=>console.log('Connexion a Mongo DB echouee'));

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.post('/api/stuff',(req,res,next)=>{
    delete req.body._id;
    const things = new Thing({
        ...req.body
    });
    things.save()
    .then(()=> res.status(201).json({messages:'Objets enregistrer'}))
    .catch(error => req.status(400).json({error}));
  });

app.get('/api/stuff/:id', (req,res,next) =>{
    Thing.findOne({_id: req.params.id})
    .then(thing => res.status(200).json(thing))
    .catch(error => res.status(404).json({error}));
});

app.get('/api/stuff',(req,res,next)=>{
    Thing.find()
    .then( things =>res.status(200).json(things))
    .catch(error => res.status(400).json({error: error}));
});

module.exports = app;

