'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('usuarios',[{
        name:"Ahri" ,
        edad: "26",
        apellido: "Fox",
        email:"ahri@ahri.com" ,
        password:"1234567	" ,
        nick:"Ahri" ,
        rol: false
    }, {
        name:"Lux" ,
        edad: 23,
        apellido:"Crown" ,
        email: "lux@lux.com",
        password: "1234567",
        nick: "Lux",
        rol: true
    }, {
        name:"Xayah" ,
        edad: 34,
        apellido: "Rumble" ,
        email:"xayah@xayah.com" ,
        password:"1234567" ,
        nick: "Xayah",
        rol: false
    }, {
        name: "Morgana" ,
        edad: 55,
        apellido:"Fallen" ,
        email: "mor@mor.com",
        password: "1234567",
        nick: "Morgana",
        rol: false
    }, {
        name: "Sivir",
        edad: 44,
        apellido:"the Blade" ,
        email: "siv@siv.com",
        password: "1234567",
        nick: "Sivir",
        rol: false
    }, {
        name: "Aisha",
        edad: 17,
        apellido:"the Radiant" ,
        email: "aisha@aisha.com",
        password: "1234567",
        nick: "AishaMagician",
        rol: false
    }, {
        name: "Ara",
        edad: "23",
        apellido:"Haan" ,
        email: "ara@ara.com",
        password:"1234567" ,
        nick: "Ara",
        rol: true
       },
], {});
  },
   

  down: async (queryInterface, Sequelize) => {
  
    await queryInterface.bulkDelete('usuarios', null, {});
   
  }
};