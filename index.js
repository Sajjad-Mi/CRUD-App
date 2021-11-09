const express = require('express');
const mongoose = require('mongoose');
const noteRoutes = require('./routes/note');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.DB, { useNewUrlParser: true,  useUnifiedTopology: true})
.then(()=>{
  app.listen(PORT, ()=> console.log('connected'))
})

app.use(noteRoutes);