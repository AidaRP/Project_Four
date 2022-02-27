'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkInsert('films',[
{
    "id": 5,
    "title": "Hamilton en Triciclo",
    "year": 2006,
    "actors": "Artemisia macrobotrys Ledeb.",
    "gender": "Regemarine",
    "city": "Wielichowo",
    "rent_out":  false,
    createdAt: new Date(),
      updatedAt: new Date()
  }, {
    "id": 15,
    "title": "Shanon en Japón",
    "year": 1996,
    "actors": "Juniperus occidentalis Hook.",
    "gender": "TRICARE PRENATAL DHA ONE",
    "city": "Araal",
     "rent_out":  false,
    createdAt: new Date(),
      updatedAt: new Date()
  }, {
    "id": 25,
    "title": "Kaye sin C",
    "year": 2000,
    "actors": "Veronica austriaca L.",
    "gender": "Bicalutamide",
    "city": "Las Americas",
     "rent_out":  false,
    createdAt: new Date(),
      updatedAt: new Date()
  }, {
    "id": 35,
    "title": "Fara & Fora",
    "year": 2009,
    "actors": "Cryptogramma sitchensis (Rupr.) T. Moore",
    "gender": "Tinted Moisturizer Broad-Spectrum SPF 45",
    "city": "Xike",
     "rent_out":  false,
    createdAt: new Date(),
      updatedAt: new Date()
  }, {
    "id": 45,
    "title": "Putin Putiado",
    "year": 2001,
    "actors": "Luffa aegyptiaca Mill.",
    "gender": "venlafaxine",
    "city": "Des Moines",
     "rent_out":  false,
    createdAt: new Date(),
      updatedAt: new Date()
  }, {
    "id": 55,
    "title": "Gillan vs Guillem",
    "year": 1997,
    "actors": "Catopsis floribunda L.B. Sm.",
    "gender": "Terrestristat",
    "city": "Tirhanimîne",
     "rent_out":  false,
    createdAt: new Date(),
      updatedAt: new Date()
  }, {
    "id": 65,
    "title": "Adi la prima de Adidas",
    "year": 2013,
    "actors": "Guettarda krugii Urb.",
    "gender": "Fenofibric Acid",
    "city": "Maroanging",
     "rent_out":  false,
    createdAt: new Date(),
      updatedAt: new Date()
  }, {
    "id": 75,
    "title": "Theadora la exploradora",
    "year": 2004,
    "actors": "Glaucium Mill.",
    "gender": "Bisoprolol Fumarate",
    "city": "Ouyang",
     "rent_out":  false,
    createdAt: new Date(),
      updatedAt: new Date()
  }, {
    "id": 85,
    "title": "La Jessi & la resaca",
    "year": 1999,
    "actors": "Cryptantha micrantha (Torr.) I.M. Johnst. var. micrantha",
    "gender": "ibuprofen",
    "city": "Zavolzh",
     "rent_out":  false,
    createdAt: new Date(),
      updatedAt: new Date()
  }, {
    "id": 95,
    "title": "La biblia Negra",
    "year": 2005,
    "actors": "Molinia caerulea (L.) Moench",
    "gender": "Mouse Epithelia",
    "city": "Taza",
     "rent_out":  false,
    createdAt: new Date(),
      updatedAt: new Date()
  }], {});
},

down: async (queryInterface, Sequelize) => {
  
    await queryInterface.bulkDelete('films', null, {});
   
}
};