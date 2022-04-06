'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkInsert('peliculas',[
{
      "title":"The Shawshank Redemption" ,
      "synopsis":"Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope." ,
      "adult": false,
      "popularity":60.915,
      "image":"/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      "title":"Dilwale Dulhania Le Jayenge" ,
      "synopsis":"Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga." ,
      "adult": false,
      "popularity":22.299,
      "image":"/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      "title": "The Godfather",
      "synopsis": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
      "adult": false,
      "popularity":90.333,
      "image":"/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      "title": "Violet Evergarden: The Movie",
      "synopsis": "As the world moves on from the war and technological advances bring changes to her life, Violet still hopes to see her lost commanding officer again.",
      "adult":false ,
      "popularity":29.101,
      "image":"/bajajkoErDst0JxdFyBkABiF9rW.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      "title":"Your Eyes Tell" ,
      "synopsis": "A tragic accident lead to Kaori's blindness, but she clings to life and the smaller pleasures it can still afford her. She meets Rui and begins to talk to him. Rui was once a promising kickboxer, but something happened in his past. Kaori's smile brings out a change in Rui. However, the two are connected in more than one way. Rui attempts to do what is right.",
      "adult":false ,
      "popularity":12.601,
      "image":"/cVn8E3Fxbi8HzYYtaSfsblYC4gl.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      "title": "Schindler's List",
      "synopsis":"The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II." ,
      "adult": false,
      "popularity":50.735,
      "image":"/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      "title": "Dou kyu sei Classmates",
      "synopsis":"Rihito Sajo, an honor student with a perfect score on the entrance exam and Hikaru Kusakabe, in a band and popular among girls, would have never crossed paths. Until one day they started talking at the practice for their school’s upcoming chorus festival. After school, the two meet regularly, as Hikaru helps Rihito to improve his singing skills. While they listen to each other’s voice and harmonize, their hearts start to beat together." ,
      "adult":false ,
      "popularity":13.046,
      "image":"/cIfRCA5wEvj9tApca4UDUagQEiM.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
  }, {
      "title":"Gabriel's Inferno Part II" ,
      "synopsis":"Professor Gabriel Emerson finally learns the truth about Julia Mitchell's identity, but his realization comes a moment too late. Julia is done waiting for the well-respected Dante specialist to remember her and wants nothing more to do with him. Can Gabriel win back her heart before she finds love in another's arms?" ,
      "adult": false,
      "popularity":12.66,
      "image":"/x5o8cLZfEXMoZczTYWLrUo1P7UJ.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
  }, {
      "title":"The Godfather: Part II" ,
      "synopsis":"In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba." ,
      "adult": false,
      "popularity":61.5,
      "image":"/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
  }, {
      "title": "Gabriel's Inferno",
      "synopsis":"An intriguing and sinful exploration of seduction, forbidden love, and redemption, Gabriel's Inferno is a captivating and wildly passionate tale of one man's escape from his own personal hell as he tries to earn the impossible--forgiveness and love." ,
      "adult": false,
      "popularity":14.564,
      "image":"/oyG9TL7FcRP4EZ9Vid6uKzwdndz.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      "title": "Gabriel's Inferno Part III",
      "synopsis":"The final part of the film adaption of the erotic romance novel Gabriel's Inferno written by an anonymous Canadian author under the pen name Sylvain Reynard." ,
      "adult":false ,
      "popularity":22.678,
      "image":"/uqmTxOP3gNl5MWRt1wlrUnzTphM.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
          
  },{
      "title": "Spirited Away",
      "synopsis":"A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family." ,
      "adult":false ,
      "popularity":85.605,
      "image":"/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
                
  },{
      "title":"Your Name." ,
      "synopsis": "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
      "adult":false ,
      "popularity":166.914,
      "image":"/q719jXXEzOoYaps6babgKnONONX.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
              
  },{
      "title": "Parasite",
      "synopsis": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
      "adult": false,
      "popularity":96.56,
      "image":"/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      createdAt: new Date(),
      updatedAt: new Date() 
  },{
      "title":"Hope" ,
      "synopsis": "After 8-year-old So-won narrowly survives a brutal sexual assault, her family labors to help her heal while coping with their own rage and grief.",
      "adult":true ,
      "popularity":22.72,
      "image":"/z4lNqsc7uhSbtbniOS6r0fTIvv5.jpg",
      createdAt: new Date(),
      updatedAt: new Date()

  },{
      "title":"12 Angry Men" ,
      "synopsis": "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
      "adult": false,
      "popularity":31.174,
      "image":"/e02s4wmTAExkKg0yF4dEG98ZRpK.jpg",
      createdAt: new Date(),
      updatedAt: new Date()

  },{      
       "title":"The Green Mile" ,
       "synopsis": "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
       "adult":false ,
       "popularity":75.281,
       "image":"/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
  
  },{
        "title": "Given",
        "synopsis":"The film centers on the love relationship among the band's bassist Haruki Nakayama, drummer Akihiko Kaji, and Akihiko's roommate and ex-boyfriend Ugetsu Murata." ,
        "adult":false ,
        "popularity":96.681,
        "image":"/xKCtoYHUyX8zAg68eemnYa2orep.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
    
  },{
        "title": "The Dark Knight",
        "synopsis":"Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker." ,
        "adult": true,
        "popularity":112.367,
        "image":"/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
  
  },{
        "title":"A Dog's Will",
        "synopsis":"The lively Jack the Cricket and the sly Chicó are poor guys living in the hinterland who cheat a bunch of people in a small in Northeastern Brazil. When they die, they have to be judged by Christ, the Devil and the Virgin Mary before they are admitted to paradise." ,
        "adult": true,
        "popularity":10.187,
        "image":"/m8eFedsS7vQCZCS8WGp5n1bVD0q.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
  
  }], {});
},

down: async (queryInterface, Sequelize) => {
  
    await queryInterface.bulkDelete('peliculas', null, {});
   
}
};