const express = require('express');
const bodyparser = require('body-parser');
const server = express();
const mongooses = require('./models/model') 

server.set('view engine' , 'ejs');
server.use(bodyparser.urlencoded({extended:true}));

const routes = require('./routes/route');
const mongoose = require('./Database/database')

server.use('/',routes);
server.use(express.static(__dirname + '/public'))
server.use('/views/uploads', express.static('./views/uploads'))

mongoose

server.listen(3000, () => {
    console.log("Server is Running now on port 3000");
});