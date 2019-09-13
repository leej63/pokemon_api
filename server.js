const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pokemon_api', {useNewUrlParser: true});
app.use(express.static(__dirname + '/public/dist/public'));



app.listen(8000, ()=> console.log('listening on port 8000'));