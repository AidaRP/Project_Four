const { User } = require('../models/index');


module.exports = (req, res, next) => {

    let id = req.body.id;

    User.findOne({
        where : { id : id }
    }).then(userFound => {

        if(userFound.rol == 1){
            next();
        }else {
            res.send(`¡The user isn't a admin!`)
        }
    }).catch(error => {
        res.send(error)
    })

};