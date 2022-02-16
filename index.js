const axios = require('axios');
const express = require('express');


const app = express();
const PORT = 3000;


//CONFIGURATION CORS OPTIONS
let corsOptions = {
    origin: "*",
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
    preflightContinue: false,
    optionSuccessStatus: 204,

};

//Middleware
app.use(express.json());
app.use(cors(corsOptions)); //Add CORS Middleware

//Routes
app.get('/',(req, res) => {res.send('Welcome to the DevHell');});
app.use(router);