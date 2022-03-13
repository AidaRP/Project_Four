'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkInsert('peliculas',[
{
    "id": 5,
    "titulo": "Hamilton en Triciclo",
    "estreno": 2006,
    "actores": "Artemisia macrobotrys Ledeb.",
    "genero": "Regemarine",
    "ciudad": "Wielichowo",
    "alquilada":  false,
    createdAt: new Date(),
      updatedAt: new Date()
  }, {
    "id": 15,
    "titulo": "Shanon en Japón",
    "estreno": 1996,
    "actores": "Juniperus occidentalis Hook.",
    "genero": "TRICARE PRENATAL DHA ONE",
    "ciudad": "Araal",
    "alquilada":  false,
    createdAt: new Date(),
      updatedAt: new Date()
  }, {
    "id": 25,
    "titulo": "Kaye sin C",
    "estreno": 2000,
    "actores": "Veronica austriaca L.",
    "genero": "Bicalutamide",
    "ciudad": "Las Americas",
    "alquilada":  false,
    createdAt: new Date(),
      updatedAt: new Date()
  }, {
    "id": 35,
    "titulo": "Fara & Fora",
    "estreno": 2009,
    "actores": "Cryptogramma sitchensis (Rupr.) T. Moore",
    "genero": "Tinted Moisturizer Broad-Spectrum SPF 45",
    "ciudad": "Xike",
    "alquilada":  false,
    createdAt: new Date(),
      updatedAt: new Date()
  }, {
    "id": 45,
    "titulo": "Putin Putiado",
    "estreno": 2001,
    "actores": "Luffa aegyptiaca Mill.",
    "genero": "venlafaxine",
    "ciudad": "Des Moines",
    "alquilada":  false,
    createdAt: new Date(),
      updatedAt: new Date()
  }, {
    "id": 55,
    "titulo": "Gillan vs Guillem",
    "estreno": 1997,
    "actores": "Catopsis floribunda L.B. Sm.",
    "genero": "Terrestristat",
    "ciudad": "Tirhanimîne",
    "alquilada":  false,
    createdAt: new Date(),
      updatedAt: new Date()
  }, {
    "id": 65,
    "titulo": "Adi la prima de Adidas",
    "estreno": 2013,
    "actores": "Guettarda krugii Urb.",
    "genero": "Fenofibric Acid",
    "ciudad": "Maroanging",
    "alquilada":  false,
    createdAt: new Date(),
      updatedAt: new Date()
  }, {
    "id": 75,
    "titulo": "Theadora la exploradora",
    "estreno": 2004,
    "actores": "Glaucium Mill.",
    "genero": "Bisoprolol Fumarate",
    "ciudad": "Ouyang",
    "alquilada":  false,
    createdAt: new Date(),
      updatedAt: new Date()
  }, {
    "id": 85,
    "titulo": "La Jessi & la resaca",
    "estreno": 1999,
    "actores": "Cryptantha micrantha (Torr.) I.M. Johnst. var. micrantha",
    "genero": "ibuprofen",
    "ciudad": "Zavolzh",
    "alquilada":  false,
    createdAt: new Date(),
      updatedAt: new Date()
  }, {
    "id": 95,
    "titulo": "La biblia Negra",
    "estreno": 2005,
    "actores": "Molinia caerulea (L.) Moench",
    "genero": "Mouse Epithelia",
    "ciudad": "Taza",
    "alquilada":  false,
    createdAt: new Date(),
      updatedAt: new Date()
  }], {});
},

down: async (queryInterface, Sequelize) => {
  
    await queryInterface.bulkDelete('peliculas', null, {});
   
}
};