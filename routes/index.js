const express  = require('express');
const app = express();
const path = require('path')
const route = express.Router();

route.use('/',(req, res, next)=>{
    res.sendFile(path.join(__dirname , '../views/index.html'))
});

module.exports = route