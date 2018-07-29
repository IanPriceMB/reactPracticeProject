const mongoose = require("mongoose");
const db = require("../models/user-model");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/esportsScoutingServices",
  {
    useMongoClient: true
  }
);

const bookSeed = [
  {
    // player
    firstName: 'Bob',
    lastName: 'Tucker',
    email: 'bobtucker1@gmail.com',
    age: 45,
    city: 'Louisville',
    state: 'KY',
    games: {
        heroesOfTheStorm: {type: Boolean, default: false, info: {
            gamerTag: 'MasterWarlock',
            rank: { type: String, default: '' },
            primary: { type: String, default: '' },
            secondary: { type: String, default: '' }
        }},
        overwatch: {type: Boolean, default: false, info: {
            gamerTag: { type: String, default: '' },
            rank: { type: String, default: '' },
            primary: { type: String, default: '' },
            secondary: { type: String, default: '' }
        }},
        fortnite: {type: Boolean, default: false, info: {
            gamerTag: { type: String, default: '' },
            rank: { type: String, default: '' }
        }},
        pubg: {type: Boolean, default: false, info: {
            gamerTag: { type: String, default: '' },
            rank: { type: String, default: '' }
        }},
        worldOfWarcraft: {type: Boolean, default: false, info: {
            gamerTag: { type: String, default: '' },
            rank: { type: String, default: '' },
            primary: { type: String, default: '' },
            secondary: { type: String, default: '' }
        }},
        DOTA2: {type: Boolean, default: false, info: {
            gamerTag: { type: String, default: '' },
            rank: { type: String, default: '' },
            primary: { type: String, default: '' },
            secondary: { type: String, default: '' }
        }},
        leagueOfLegends: {type: Boolean, default: false, info: {
            gamerTag: { type: String, default: '' },
            rank: { type: String, default: '' },
            primary: { type: String, default: '' },
            secondary: { type: String, default: '' }
        }},
        counterStrike: {type: Boolean, default: false, info: {
            gamerTag: { type: String, default: '' },
            rank: { type: String, default: '' },
            weaponPref: { type: String, default: '' },
            role: { type: String, default: '' }
        }},
        starcraft2: {type: Boolean, default: false, info: {
            gamerTag: { type: String, default: '' },
            rank: { type: String, default: '' },
            primaryRace: { type: String, default: '' },
            secondaryRace: { type: String, default: '' }
        }},
        hearthStone: {type: Boolean, default: false, info: {
            gamerTag: { type: String, default: '' },
            rank: { type: String, default: '' },
            prefs: { type: Array, default: [], set: [{}]}
        }},
        smashBros: {type: Boolean, default: false, info: {
            gamerTag: { type: String, default: '' },
            rank: { type: String, default: '' },
            primary: { type: String, default: '' },
            secondary: { type: String, default: '' },
        }},
        streetFighter: {type: Boolean, default: false, info: {
            gamerTag: { type: String, default: '' },
            rank: { type: String, default: '' },
            primary: { type: String, default: '' },
            secondary: { type: String, default: '' },
        }},
        halo: {type: Boolean, default: false, info: {
            gamerTag: { type: String, default: '' },
            rank: { type: String, default: '' },
            primary: { type: String, default: '' },
            secondary: { type: String, default: '' },
        }},
        rainbow6: {type: Boolean, default: false, info: {
            gamerTag: { type: String, default: '' },
            rank: { type: String, default: '' },
            primary: { type: String, default: '' },
            secondary: { type: String, default: '' },
        }},
        magic: {type: Boolean, default: false, info: {
            gamerTag: { type: String, default: '' },
            rank: { type: String, default: '' },
            primary: { type: String, default: '' },
            secondary: { type: String, default: '' },
        }},
        smite: {type: Boolean, default: false, info: {
            gamerTag: { type: String, default: '' },
            rank: { type: String, default: '' },
            primary: { type: String, default: '' },
            secondary: { type: String, default: '' },
        }},
        warcraft3: {type: Boolean, default: false, info: {
            gamerTag: { type: String, default: '' },
            rank: { type: String, default: '' },
            primary: { type: String, default: '' },
            secondary: { type: String, default: '' },
        }},
    },
    //various infos
    googleId: { type: String, required: true },
    type: { type: String, default: '' },
    date: { type: Date, default: Date.now }
},
];

db.Book
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
