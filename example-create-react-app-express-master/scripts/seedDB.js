const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/esportsScoutingServices",
);

const UserSeed = [
    {
        // player
        firstName: 'Bob',
        lastName: 'Smith',
        email: 'email@email.com',
        age: 20,
        city: 'Denver',
        state: 'CO',
        games: {
            HeroesOfTheStorm: {
                GamerTag: 'Warlock',
                Rank: 'GrandMasters',
                Primary: 'Assassin',
                Secondary: 'Support'
            },
            Overwatch: {
                GamerTag: 'Warlock',
                Rank: 'GrandMasters',
                Primary: 'Assassin',
                Secondary: 'Support'
            },
            Fortnite: {
                GamerTag: 'Warlock',
                Rank: 'GrandMasters',
            },
            PUBG: {
                GamerTag: 'Warlock',
                Rank: 'GrandMasters',
            },
            WorldOfWarcraft: {
                GamerTag: 'Warlock',
                Rank: 'GrandMasters',
                Primary: 'Assassin',
                Secondary: 'Support'
            },
            DOTA2: {
                GamerTag: 'Warlock',
                Rank: 'GrandMasters',
                Primary: 'Assassin',
                Secondary: 'Support'
            },
            LeagueOfLegends: {
                GamerTag: 'Warlock',
                Rank: 'GrandMasters',
                Primary: 'Assassin',
                Secondary: 'Support'
            },
            CounterStrike: {
                GamerTag: 'Warlock',
                Rank: 'GrandMasters',
                WeaponPreference: 'AWP',
                Role: 'Sniper'
            },
            Starcraft2: {
                GamerTag: 'Warlock',
                Rank: 'GrandMasters',
                PrimaryRace: 'Terran',
                SecondaryRace: 'Zerg'
            },
            HearthStone: {
                GamerTag: 'Warlock',
                Rank: 'GrandMasters',
                PreferedClasses: 'Shaman Mage Warrior'
            },
            SuperSmashBros: {
                GamerTag: 'Warlock',
                Rank: 'GrandMasters',
                Primary: 'Assassin',
                Secondary: 'Support'
            },
            StreetFighter: {
                GamerTag: 'Warlock',
                Rank: 'GrandMasters',
                Primary: 'Assassin',
                Secondary: 'Support'
            },
            Halo: {
                GamerTag: 'Warlock',
                Rank: 'GrandMasters',
            },
            Rainbow6: {
                GamerTag: 'Warlock',
                Rank: 'GrandMasters',
            },
            MagicTheGathering: {
                GamerTag: 'Warlock',
                Rank: 'GrandMasters',
            },
            Smite: {
                GamerTag: 'Warlock',
                Rank: 'GrandMasters',
                Primary: 'Assassin',
                Secondary: 'Support'
            },
            Warcraft3: {
                GamerTag: 'Warlock',
                Rank: 'GrandMasters',
                PrimaryRace: 'Human'
            }
        },
        //university
        SchoolName: 'University of Boulder',
        ScoutName: 'Happy Man',
        Coach: 'Buster Boulder',
        SchoolCity: 'Boulder',
        SchoolState: 'CO',
        Statement: 'We are here to win.',
        SchoolEmail: 'boulder@boulder.com',
        offeredGames: {
            HeroesOfTheStorm: false,
            Overwatch: false,
            Fortnite: true,
            PUBG: true,
            DOTA2: true,
            LeagueOfLegends: true,
            CounterStrike: true,
            Starcraft2: true,
            Hearthstone: true,
            SuperSmashBros: false,
            StreetFighter: false,
            Halo: true,
            Rainbow6: false,
            Warcraft3: true,
            Smite: true,
            MagicTheGathering: false
        },
        //various infos
        googleId: 'ha',
        payed: true,
        type: 'university',
    },
    {
        // player
        firstName: 'Gary',
        lastName: 'Ollard',
        email: 'email2@email.com',
        age: 20,
        city: 'Salt Lake City',
        state: 'UT',
        games: {
            HeroesOfTheStorm: {
                GamerTag: 'MasterC0M4ND3R',
                Rank: 'Masters',
                Primary: 'Assassin',
                Secondary: 'Support'
            },
            Overwatch: {
                GamerTag: 'MasterC0M4ND3R',
                Rank: 'Masters',
                Primary: 'Assassin',
                Secondary: 'Support'
            },
            Fortnite: {
                GamerTag: 'MasterC0M4ND3R',
                Rank: 'Masters',
            },
            PUBG: {
                GamerTag: 'MasterC0M4ND3R',
                Rank: 'Masters',
            },
            WorldOfWarcraft: {
                GamerTag: 'MasterC0M4ND3R',
                Rank: 'Masters',
                Primary: 'Assassin',
                Secondary: 'Support'
            },
            DOTA2: {
                GamerTag: 'MasterC0M4ND3R',
                Rank: 'Masters',
                Primary: 'Assassin',
                Secondary: 'Support'
            },
            LeagueOfLegends: {
                GamerTag: 'MasterC0M4ND3R',
                Rank: 'Masters',
                Primary: 'Assassin',
                Secondary: 'Support'
            },
            CounterStrike: {
                GamerTag: 'MasterC0M4ND3R',
                Rank: 'Masters',
                WeaponPreference: 'AWP',
                Role: 'Sniper'
            },
            Starcraft2: {
                GamerTag: 'MasterC0M4ND3R',
                Rank: 'Masters',
                PrimaryRace: 'Terran',
                SecondaryRace: 'Zerg'
            },
            HearthStone: {
                GamerTag: 'MasterC0M4ND3R',
                Rank: 'Masters',
                PreferedClasses: 'Shaman Mage Warrior'
            },
            SuperSmashBros: {
                GamerTag: 'MasterC0M4ND3R',
                Rank: 'Masters',
                Primary: 'Assassin',
                Secondary: 'Support'
            },
            StreetFighter: {
                GamerTag: 'MasterC0M4ND3R',
                Rank: 'Masters',
                Primary: 'Assassin',
                Secondary: 'Support'
            },
            Halo: {
                GamerTag: 'MasterC0M4ND3R',
                Rank: 'Masters',
            },
            Rainbow6: {
                GamerTag: 'MasterC0M4ND3R',
                Rank: 'Masters',
            },
            MagicTheGathering: {
                GamerTag: 'MasterC0M4ND3R',
                Rank: 'Masters',
            },
            Smite: {
                GamerTag: 'MasterC0M4ND3R',
                Rank: 'Masters',
                Primary: 'Assassin',
                Secondary: 'Support'
            },
            Warcraft3: {
                GamerTag: 'MasterC0M4ND3R',
                Rank: 'Masters',
                PrimaryRace: 'Orc'
            }
        },
        //university
        SchoolName: 'Stanfod University',
        ScoutName: 'Buck Wiliams',
        Coach: 'Shila Williams',
        SchoolCity: 'Stanford',
        SchoolState: 'CA',
        Statement: 'We are here to win.',
        SchoolEmail: 'Stanford@california.com',
        offeredGames: {
            HeroesOfTheStorm: true,
            Overwatch: true,
            Fortnite: false,
            PUBG: false,
            DOTA2: false,
            LeagueOfLegends: true,
            CounterStrike: false,
            Starcraft2: false,
            Hearthstone: false,
            SuperSmashBros: false,
            StreetFighter: false,
            Halo: true,
            Rainbow6: false,
            Warcraft3: true,
            Smite: true,
            MagicTheGathering: false
        },
        //various infos
        googleId: 'ha',
        payed: true,
        type: 'university',
    },
    {
        // player
        firstName: 'Bob',
        lastName: 'Smith',
        email: 'email@email.com',
        age: 20,
        city: 'Denver',
        state: 'CO',
        games: {
            HeroesOfTheStorm: {
                GamerTag: 'Warlock',
                Rank: 'GrandMasters',
                Primary: 'Assassin',
                Secondary: 'Support'
            },
            Overwatch: {
                GamerTag: 'Warlock',
                Rank: 'GrandMasters',
                Primary: 'Assassin',
                Secondary: 'Support'
            },
            Fortnite: {
                GamerTag: 'Warlock',
                Rank: 'GrandMasters',
            },
            PUBG: {
                GamerTag: 'Warlock',
                Rank: 'GrandMasters',
            },
            WorldOfWarcraft: {
                GamerTag: 'Warlock',
                Rank: 'GrandMasters',
                Primary: 'Assassin',
                Secondary: 'Support'
            },
            DOTA2: {
                GamerTag: 'Warlock',
                Rank: 'GrandMasters',
                Primary: 'Assassin',
                Secondary: 'Support'
            },
            LeagueOfLegends: {
                GamerTag: 'Warlock',
                Rank: 'GrandMasters',
                Primary: 'Assassin',
                Secondary: 'Support'
            },
            CounterStrike: {
                GamerTag: 'Warlock',
                Rank: 'GrandMasters',
                WeaponPreference: 'AWP',
                Role: 'Sniper'
            },
            Starcraft2: {
                GamerTag: 'Warlock',
                Rank: 'GrandMasters',
                PrimaryRace: 'Terran',
                SecondaryRace: 'Zerg'
            },
            HearthStone: {
                GamerTag: 'Warlock',
                Rank: 'GrandMasters',
                PreferedClasses: 'Shaman Mage Warrior'
            },
            SuperSmashBros: {
                GamerTag: 'Warlock',
                Rank: 'GrandMasters',
                Primary: 'Assassin',
                Secondary: 'Support'
            },
            StreetFighter: {
                GamerTag: 'Warlock',
                Rank: 'GrandMasters',
                Primary: 'Assassin',
                Secondary: 'Support'
            },
            Halo: {
                GamerTag: 'Warlock',
                Rank: 'GrandMasters',
            },
            Rainbow6: {
                GamerTag: 'Warlock',
                Rank: 'GrandMasters',
            },
            MagicTheGathering: {
                GamerTag: 'Warlock',
                Rank: 'GrandMasters',
            },
            Smite: {
                GamerTag: 'Warlock',
                Rank: 'GrandMasters',
                Primary: 'Assassin',
                Secondary: 'Support'
            },
            Warcraft3: {
                GamerTag: 'Warlock',
                Rank: 'GrandMasters',
                PrimaryRace: 'Human'
            }
        },
        //university
        SchoolName: 'University of Boulder',
        ScoutName: 'Happy Man',
        Coach: 'Buster Boulder',
        SchoolCity: 'Boulder',
        SchoolState: 'CO',
        Statement: 'We are here to win.',
        SchoolEmail: 'boulder@boulder.com',
        offeredGames: {
            HeroesOfTheStorm: false,
            Overwatch: false,
            Fortnite: true,
            PUBG: true,
            DOTA2: true,
            LeagueOfLegends: true,
            CounterStrike: true,
            Starcraft2: true,
            Hearthstone: true,
            SuperSmashBros: false,
            StreetFighter: false,
            Halo: true,
            Rainbow6: false,
            Warcraft3: true,
            Smite: true,
            MagicTheGathering: false
        },
        //various infos
        googleId: 'ha',
        payed: true,
        type: 'player',
    },
    {
        // player
        firstName: 'Gary',
        lastName: 'Ollard',
        email: 'email2@email.com',
        age: 20,
        city: 'Salt Lake City',
        state: 'UT',
        games: {
            HeroesOfTheStorm: {
                GamerTag: 'MasterC0M4ND3R',
                Rank: 'Masters',
                Primary: 'Assassin',
                Secondary: 'Support'
            },
            Overwatch: {
                GamerTag: 'MasterC0M4ND3R',
                Rank: 'Masters',
                Primary: 'Assassin',
                Secondary: 'Support'
            },
            Fortnite: {
                GamerTag: 'MasterC0M4ND3R',
                Rank: 'Masters',
            },
            PUBG: {
                GamerTag: 'MasterC0M4ND3R',
                Rank: 'Masters',
            },
            WorldOfWarcraft: {
                GamerTag: 'MasterC0M4ND3R',
                Rank: 'Masters',
                Primary: 'Assassin',
                Secondary: 'Support'
            },
            DOTA2: {
                GamerTag: 'MasterC0M4ND3R',
                Rank: 'Masters',
                Primary: 'Assassin',
                Secondary: 'Support'
            },
            LeagueOfLegends: {
                GamerTag: 'MasterC0M4ND3R',
                Rank: 'Masters',
                Primary: 'Assassin',
                Secondary: 'Support'
            },
            CounterStrike: {
                GamerTag: 'MasterC0M4ND3R',
                Rank: 'Masters',
                WeaponPreference: 'AWP',
                Role: 'Sniper'
            },
            Starcraft2: {
                GamerTag: 'MasterC0M4ND3R',
                Rank: 'Masters',
                PrimaryRace: 'Terran',
                SecondaryRace: 'Zerg'
            },
            HearthStone: {
                GamerTag: 'MasterC0M4ND3R',
                Rank: 'Masters',
                PreferedClasses: 'Shaman Mage Warrior'
            },
            SuperSmashBros: {
                GamerTag: 'MasterC0M4ND3R',
                Rank: 'Masters',
                Primary: 'Assassin',
                Secondary: 'Support'
            },
            StreetFighter: {
                GamerTag: 'MasterC0M4ND3R',
                Rank: 'Masters',
                Primary: 'Assassin',
                Secondary: 'Support'
            },
            Halo: {
                GamerTag: 'MasterC0M4ND3R',
                Rank: 'Masters',
            },
            Rainbow6: {
                GamerTag: 'MasterC0M4ND3R',
                Rank: 'Masters',
            },
            MagicTheGathering: {
                GamerTag: 'MasterC0M4ND3R',
                Rank: 'Masters',
            },
            Smite: {
                GamerTag: 'MasterC0M4ND3R',
                Rank: 'Masters',
                Primary: 'Assassin',
                Secondary: 'Support'
            },
            Warcraft3: {
                GamerTag: 'MasterC0M4ND3R',
                Rank: 'Masters',
                PrimaryRace: 'Orc'
            }
        },
        //university
        SchoolName: 'Stanfod University',
        ScoutName: 'Buck Wiliams',
        Coach: 'Shila Williams',
        SchoolCity: 'Stanford',
        SchoolState: 'CA',
        Statement: 'We are here to win.',
        SchoolEmail: 'Stanford@california.com',
        offeredGames: {
            HeroesOfTheStorm: true,
            Overwatch: true,
            Fortnite: false,
            PUBG: false,
            DOTA2: false,
            LeagueOfLegends: true,
            CounterStrike: false,
            Starcraft2: false,
            Hearthstone: false,
            SuperSmashBros: false,
            StreetFighter: false,
            Halo: true,
            Rainbow6: false,
            Warcraft3: true,
            Smite: true,
            MagicTheGathering: false
        },
        //various infos
        googleId: 'ha',
        payed: true,
        type: 'player',
    },
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(UserSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
