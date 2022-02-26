require('dotenv').config();  // this line is important!
module.exports = {
    secret: process.env.AUTH_SECRET || "zA23RtfLoPP", //Used Key to encripting
    expires: process.env.AUTH_EXPIRES || "24h", //Token duration
    rounds: process.env.AUTH_ROUNDS || 10 //Turns that the password is encripting
}