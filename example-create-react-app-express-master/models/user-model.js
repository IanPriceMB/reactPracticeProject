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
        HeroesOfTheStorm: {
            GamerTag: { type: String, default: '' },
            Rank: { type: String, default: '' },
            Primary: { type: String, default: '' },
            Secondary: { type: String, default: '' }
        },
        Overwatch: {
            GamerTag: { type: String, default: '' },
            Rank: { type: String, default: '' },
            Primary: { type: String, default: '' },
            Secondary: { type: String, default: '' }
        },
        Fortnite: {
            GamerTag: { type: String, default: '' },
            Rank: { type: String, default: '' }
        },
        PUBG: {
            GamerTag: { type: String, default: '' },
            Rank: { type: String, default: '' }
        },
        WorldOfWarcraft: {
            GamerTag: { type: String, default: '' },
            Rank: { type: String, default: '' },
            Primary: { type: String, default: '' },
            Secondary: { type: String, default: '' }
        },
        DOTA2: {
            GamerTag: { type: String, default: '' },
            Rank: { type: String, default: '' },
            Primary: { type: String, default: '' },
            Secondary: { type: String, default: '' }
        },
        LeagueOfLegends: {
            GamerTag: { type: String, default: '' },
            Rank: { type: String, default: '' },
            Primary: { type: String, default: '' },
            Secondary: { type: String, default: '' }
        },
        CounterStrike: {
            GamerTag: { type: String, default: '' },
            Rank: { type: String, default: '' },
            WeaponPreference: { type: String, default: '' },
            Role: { type: String, default: '' }
        },
        Starcraft2: {
            GamerTag: { type: String, default: '' },
            Rank: { type: String, default: '' },
            PrimaryRace: { type: String, default: '' },
            SecondaryRace: { type: String, default: '' }
        },
        HearthStone: {
            GamerTag: { type: String, default: '' },
            Rank: { type: String, default: '' },
            PreferedClasses: { type: Array, default: []}
        },
        SuperSmashBros: {
            GamerTag: { type: String, default: '' },
            Rank: { type: String, default: '' },
            Primary: { type: String, default: '' },
            Secondary: { type: String, default: '' },
        },
        StreetFighter: {
            GamerTag: { type: String, default: '' },
            Rank: { type: String, default: '' },
            Primary: { type: String, default: '' },
            Secondary: { type: String, default: '' },
        },
        Halo: {
            GamerTag: { type: String, default: '' },
            Rank: { type: String, default: '' }
        },
        Rainbow6: {
            GamerTag: { type: String, default: '' },
            Rank: { type: String, default: '' }
        },
        MagicTheGathering: {
            GamerTag: { type: String, default: '' },
            Rank: { type: String, default: '' }
        },
        Smite: {
            GamerTag: { type: String, default: '' },
            Rank: { type: String, default: '' },
            Primary: { type: String, default: '' },
            Secondary: { type: String, default: '' },
        },
        Warcraft3: {
            GamerTag: { type: String, default: '' },
            Rank: { type: String, default: '' },
            PrimaryRace: { type: String, default: '' }
        }
    },
    //university
    SchoolName: { type: String, default: '' },
    ScoutName: { type: String, default: '' },
    Coach: { type: String, default: '' },
    SchoolCity: { type: String, default: '' },
    SchoolState: { type: String, default: '' },
    Statement: {type: String, defautlt: ''},
    offeredGames: {
        HeroesOfTheStorm: {type: Boolean, default: false},
        Overwatch: {type: Boolean, default: false},
        Fortnite: {type: Boolean, default: false},
        PUBG: {type: Boolean, default: false},
        DOTA2: {type: Boolean, default: false},
        LeagueOfLegends: {type: Boolean, default: false},
        CounterStrike: {type: Boolean, default: false},
        Starcraft2: {type: Boolean, default: false},
        Hearthstone: {type: Boolean, default: false},
        SuperSmashBros: {type: Boolean, default: false},
        StreetFighter: {type: Boolean, default: false},
        Halo: {type: Boolean, default: false},
        Rainbow6: {type: Boolean, default: false},
        Warcraft3: {type: Boolean, default: false},
        Smite: {type: Boolean, default: false},
        MagicTheGathering: {type: Boolean, default: false}
    },
    //various infos
    googleId: { type: String, required: true },
    payed: {type: Boolean, default: false},
    type: { type: String, default: '' },
    date: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema)

module.exports = User;