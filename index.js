const axios = require('axios');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./router.js');
const db = require('./db.js');


const app = express();
const PORT = 3001;


//CONFIGURATION CORS OPTIONS
let corsOptions = {
    origin: "*",
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
    preflightContinue: false,
    optionSuccessStatus: 204,

};

//Middleware
app.use(express.json());
app.use(cors(corsOptions)); //Add CORS Middleware.

//Routes
app.get('/',(req, res) => {res.send('Welcome to the DevHell');});
app.use(router);

db.then(()=>{
    app.listen(PORT, ()=> console.log(`Server Online in port: ${PORT}`)); //Message for know that server are in functioning.
})
.catch((err)=> console.log(err.message));   