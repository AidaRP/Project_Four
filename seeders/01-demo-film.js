'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkInsert('films',[
{
    "id": 1,
    "title": "Hamilton",
    "year": 2006,
    "actors": "Artemisia macrobotrys Ledeb.",
    "gender": "Regemarine",
    "city": "Wielichowo",
    "rent_out":  false,
    createdAt: new Date(),
      updatedAt: new Date()
  }, {
    "id": 2,
    "title": "Shanon",
    "year": 1996,
    "actors": "Juniperus occidentalis Hook.",
    "gender": "TRICARE PRENATAL DHA ONE",
    "city": "Araal",
     "rent_out":  false,
    createdAt: new Date(),
      updatedAt: new Date()
  }, {
    "id": 3,
    "title": "Kaye",
    "year": 2000,
    "actors": "Veronica austriaca L.",
    "gender": "Bicalutamide",
    "city": "Las Americas",
     "rent_out":  false,
    createdAt: new Date(),
      updatedAt: new Date()
  }, {
    "id": 4,
    "title": "Fara",
    "year": 2009,
    "actors": "Cryptogramma sitchensis (Rupr.) T. Moore",
    "gender": "Tinted Moisturizer Broad-Spectrum SPF 45",
    "city": "Xike",
     "rent_out":  false,
    createdAt: new Date(),
      updatedAt: new Date()
  }, {
    "id": 5,
    "title": "Corella",
    "year": 2001,
    "actors": "Luffa aegyptiaca Mill.",
    "gender": "venlafaxine",
    "city": "Des Moines",
     "rent_out":  false,
    createdAt: new Date(),
      updatedAt: new Date()
  }, {
    "id": 6,
    "title": "Gillan",
    "year": 1997,
    "actors": "Catopsis floribunda L.B. Sm.",
    "gender": "Terrestristat",
    "city": "Tirhanimîne",
     "rent_out":  false,
    createdAt: new Date(),
      updatedAt: new Date()
  }, {
    "id": 7,
    "title": "Adi",
    "year": 2013,
    "actors": "Guettarda krugii Urb.",
    "gender": "Fenofibric Acid",
    "city": "Maroanging",
     "rent_out":  false,
    createdAt: new Date(),
      updatedAt: new Date()
  }, {
    "id": 8,
    "title": "Theadora",
    "year": 2004,
    "actors": "Glaucium Mill.",
    "gender": "Bisoprolol Fumarate",
    "city": "Ouyang",
     "rent_out":  false,
    createdAt: new Date(),
      updatedAt: new Date()
  }, {
    "id": 9,
    "title": "Jessi",
    "year": 1999,
    "actors": "Cryptantha micrantha (Torr.) I.M. Johnst. var. micrantha",
    "gender": "ibuprofen",
    "city": "Zavolzh",
     "rent_out":  false,
    createdAt: new Date(),
      updatedAt: new Date()
  }, {
    "id": 10,
    "title": "Emilio",
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