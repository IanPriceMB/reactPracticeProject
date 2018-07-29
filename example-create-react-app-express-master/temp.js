const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // player
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {type: String, required: true},
    games: {
        heroesOfTheStorm: {type: Boolean, default: false, info: {
            gamerTag: { type: String, default: '' },
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
    
    gamerTag: { type: String, default: '' },
    rank: { type: String, default: '' },
    primary: { type: String, default: '' },
    secondary: { type: String, default: '' },
    age: { type: Number, default: '' },
    city: { type: String, default: '' },
    state: { type: String, default: '' },
    //university
    schoolName: { type: String, default: '' },
    scoutName: { type: String, default: '' },
    coach: { type: String, default: '' },
    heroesOfTheStormOffered: {type: Boolean, default: false},
    overwatchOffered: {type: Boolean, default: false},
    leagueOfLegendsOffered: {type: Boolean, default: false},
    schoolCity: { type: String, default: '' },
    schoolState: { type: String, default: '' },
    //various infos
    googleId: { type: String, required: true },
    payed: {type: Boolean, default: false},
    type: { type: String, default: '' },
    date: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema)

module.exports = User;