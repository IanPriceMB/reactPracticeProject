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