'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('users',[{
    "id": 5,
    "name": "Leigh",
    "email": "lblaik0@baidu.com",
    "password": "Ul440OPrNms",
    "city": "Gorki Vtoryye",
    "createdAt":"4.12.2022",
    "updatedAt":"19.02.2022"
  }, {
    "id": 15,
    "name": "Lewes",
    "email": "lphillipp1@amazon.co.uk",
    "password": "zypMKyYFU",
    "city": "Shiye",
    "createdAt":"4.12.2022",
    "updatedAt":"19.02.2022"
  }, {
    "id": 25,
    "name": "Ynes",
    "email": "ychristescu2@irs.gov",
    "password": "gwYSI0gy",
    "city": "Haz-Zebbug",
    "createdAt":"4.12.2022",
    "updatedAt":"19.02.2022"
  }, {
    "id": 35,
    "name": "Erda",
    "email": "ebuckler3@wikimedia.org",
    "password": "siRgHx",
    "city": "Orlando",
    "createdAt":"4.12.2022",
    "updatedAt":"19.02.2022"
  }, {
    "id": 45,
    "name": "Rosemaria",
    "email": "rkernes4@cyberchimps.com",
    "password": "FPhmK8xCx4I",
    "city": "Pokotylivka",
    "createdAt":"4.12.2022",
    "updatedAt":"19.02.2022"
  }, {
    "id": 55,
    "name": "Derek",
    "email": "dbradberry5@imageshack.us",
    "password": "iG8ydALzsMf",
    "city": "Kinsealy-Drinan",
    "createdAt":"4.12.2022",
    "updatedAt":"19.02.2022"
  }, {
    "id": 65,
    "name": "Kennan",
    "email": "kparnall6@comcast.net",
    "password": "qbxbYoqkVx",
    "city": "Crasto",
    "createdAt":"4.12.2022",
    "updatedAt":"19.02.2022"
  }, {
    "id": 75,
    "name": "Hailee",
    "email": "hginity7@mediafire.com",
    "password": "G7ITNce",
    "city": "Liuji",
    "createdAt":"4.12.2022",
    "updatedAt":"19.02.2022"
  }, {
    "id": 85,
    "name": "Arlyn",
    "email": "asings8@instagram.com",
    "password": "U0IvPvgj5",
    "city": "Bengtsfors",
    "createdAt":"4.12.2022",
    "updatedAt":"19.02.2022"
  }, {
    "id": 95,
    "name": "Pacorro",
    "email": "phampstead9@github.com",
    "password": "WfluRFBxk0h",
    "city": "Alpūrai",
    "createdAt":"4.12.2022",
    "updatedAt":"19.02.2022"
  }], {});
},

down: async (queryInterface, Sequelize) => {
  
    await queryInterface.bulkDelete('users', null, {});
   
}
};
  