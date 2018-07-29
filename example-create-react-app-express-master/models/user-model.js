const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // player
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {type: String, required: true},
    age: { type: Number, default: '' },
    city: { type: String, default: '' },
    state: { type: String, default: '' },
    games: {
        heroesOfTheStorm: {
            gamerTag: { type: String, default: '' },
            rank: { type: String, default: '' },
            primary: { type: String, default: '' },
            secondary: { type: String, default: '' }
        },
        overwatch: {
            gamerTag: { type: String, default: '' },
            rank: { type: String, default: '' },
            primary: { type: String, default: '' },
            secondary: { type: String, default: '' }
        },
        fortnite: {
            gamerTag: { type: String, default: '' },
            rank: { type: String, default: '' }
        },
        pubg: {
            gamerTag: { type: String, default: '' },
            rank: { type: String, default: '' }
        },
        worldOfWarcraft: {
            gamerTag: { type: String, default: '' },
            rank: { type: String, default: '' },
            primary: { type: String, default: '' },
            secondary: { type: String, default: '' }
        },
        DOTA2: {
            gamerTag: { type: String, default: '' },
            rank: { type: String, default: '' },
            primary: { type: String, default: '' },
            secondary: { type: String, default: '' }
        },
        leagueOfLegends: {
            gamerTag: { type: String, default: '' },
            rank: { type: String, default: '' },
            primary: { type: String, default: '' },
            secondary: { type: String, default: '' }
        },
        counterStrike: {
            gamerTag: { type: String, default: '' },
            rank: { type: String, default: '' },
            weaponPref: { type: String, default: '' },
            role: { type: String, default: '' }
        },
        starcraft2: {
            gamerTag: { type: String, default: '' },
            rank: { type: String, default: '' },
            primaryRace: { type: String, default: '' },
            secondaryRace: { type: String, default: '' }
        },
        hearthStone: {
            gamerTag: { type: String, default: '' },
            rank: { type: String, default: '' },
            prefs: { type: Array, default: []}
        },
        smashBros: {
            gamerTag: { type: String, default: '' },
            rank: { type: String, default: '' },
            primary: { type: String, default: '' },
            secondary: { type: String, default: '' },
        },
        streetFighter: {
            gamerTag: { type: String, default: '' },
            rank: { type: String, default: '' },
            primary: { type: String, default: '' },
            secondary: { type: String, default: '' },
        },
        halo: {
            gamerTag: { type: String, default: '' },
            rank: { type: String, default: '' },
            primary: { type: String, default: '' },
            secondary: { type: String, default: '' },
        },
        rainbow6: {
            gamerTag: { type: String, default: '' },
            rank: { type: String, default: '' },
            primary: { type: String, default: '' },
            secondary: { type: String, default: '' },
        },
        magic: {
            gamerTag: { type: String, default: '' },
            rank: { type: String, default: '' },
            primary: { type: String, default: '' },
            secondary: { type: String, default: '' },
        },
        smite: {
            gamerTag: { type: String, default: '' },
            rank: { type: String, default: '' },
            primary: { type: String, default: '' },
            secondary: { type: String, default: '' },
        },
        warcraft3: {
            gamerTag: { type: String, default: '' },
            rank: { type: String, default: '' },
            primary: { type: String, default: '' },
            secondary: { type: String, default: '' },
        }
    },
    //university
    schoolName: { type: String, default: '' },
    scoutName: { type: String, default: '' },
    coach: { type: String, default: '' },
    schoolCity: { type: String, default: '' },
    schoolState: { type: String, default: '' },
    statement: {type: String, defautlt: ''},
    offeredGames: {
        heroesOfTheStormOffered: {value: {type: Boolean, default: false}, scholarships: []},
        overwatchOffered: {value: {type: Boolean, default: false}, scholarships: []},
        fortniteOffered: {value: {type: Boolean, default: false}, scholarships: []},
        pubgOffered: {value: {type: Boolean, default: false}, scholarships: []},
        DOTA2Offered: {value: {type: Boolean, default: false}, scholarships: []},
        leagueOfLegendsOffered: {value: {type: Boolean, default: false}, scholarships: []},
        counterStrikeOffered: {value: {type: Boolean, default: false}, scholarships: []},
        starcraft2Offered: {value: {type: Boolean, default: false}, scholarships: []},
        hearthstoneOffered: {value: {type: Boolean, default: false}, scholarships: []},
        smashBrosOffered: {value: {type: Boolean, default: false}, scholarships: []},
        streetFighterOffered: {value: {type: Boolean, default: false}, scholarships: []},
        haloOffered: {value: {type: Boolean, default: false}, scholarships: []},
        rainbow6Offered: {value: {type: Boolean, default: false}, scholarships: []},
        warcraft3Offered: {value: {type: Boolean, default: false}, scholarships: []},
        smiteOffered: {value: {type: Boolean, default: false}, scholarships: []},
        magicOffered: {value: {type: Boolean, default: false}, scholarships: []},
    },
    //various infos
    googleId: { type: String, required: true },
    payed: {type: Boolean, default: false},
    type: { type: String, default: '' },
    date: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema)

module.exports = User;