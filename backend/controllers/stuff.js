const Thing = require('../models/Things');

const auth = require('../middleware/auth');

exports.creatThing = (req,res,next)=>{
    //delete req.body._id;
    //const things = new Thing({
    //    ...req.body
    //});
    //things.save()
    //.then(()=> res.status(201).json({messages:'Objets enregistrer'}))
    //.catch(error => req.status(400).json({error}));

    const thingObject = JSON.parse(req.body.thing);
    delete thingObject._id;
    delete thingObject.userId;

    const thing = new Thing({
        ...thingObject,
        userId: req.auth.userId,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });

    thing.save()
    .then(() => {res.status(201).json({message: 'Objet enregistre !'})})
    .catch(error => { res.status(400)});
    
  };

exports.getOneStuff = (req,res,next) =>{
    
    Thing.findOne({_id: req.params.id})
    .then(thing => res.status(200).json(thing))
    .catch(error => res.status(404).json({error}));
};

exports.getAllStoff = (req,res,next)=>{
    //res.json({accessToken:jwt.accessToken});
    Thing.find()
    .then( things =>res.status(200).json(things))
    .catch(error => res.status(400).json({error: error}));
};

exports.updateStuff = (req,res,next)=>{
    Thing.updateOne({_id: req.params.id},{...req.body,  _id: req.params.id})
    .then( () =>res.status(200).json({message:'Objet modifier'}))
    .catch(error => res.status(400).json({error: error}));
};

exports.deleteStuff = (req,res,next)=>{
    Thing.deleteOne({_id: req.params.id})
    .then( () =>res.status(200).json({message:'Objet supprimer avec succes'}))
    .catch(error => res.status(400).json({error: error}));
};