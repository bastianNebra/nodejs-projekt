const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

mongoose.connect('mongodb+srv://balo1001:XuRw7FjwAdX8zjk7@remetra.nvykegq.mongodb.net/?retryWrites=true&w=majority&appName=remetra',
{ useNewUrlParser: true,
  useUnifiedTopology: true })
.then(() => console.log('Connexion � MongoDB r�ussie !'))
.catch(() => console.log('Connexion � MongoDB �chou�e !'));

const { error } = require('console');
const app = express();

const stuffRoutes = require("./routes/stuff");
const userRoutes = require("./routes/user");

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers',    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/api/stuff/', stuffRoutes);
app.use('/api/auth',userRoutes);
app.use('/images',express.static(path.join(__dirname, 'images')));

module.exports = app;

