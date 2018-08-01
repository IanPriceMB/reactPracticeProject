import React, { Component } from 'react';
import API from '../utils/API';
import logo from '../logo.png';
import {Link} from 'react-router-dom'


const styles = {
    img: {
        maxWidth: 100,
        margin: '0 auto',
        display: 'block'
    }
  }

class Profile extends Component {
  state = {
    user: {},
    location: 'profile',
    discovers: []
  };

  componentDidMount() {
    this.loadInfo(this.props.match.params.id);
  }
  loadInfo = id => {
    API.getUser(id)
    .then(res => this.setState({ user: res.data }))
    .catch(err => console.log(err));
  };
  locationHandler = local => {
      this.setState({location: local});
  }
  handlePlayerFormSubmit = event => {
    event.preventDefault();
    if (this.state.user.firstName && this.state.user.lastName) {
        API.updateUser( this.state.user._id, {
            firstName: this.state.user.firstName,
            lastName:  this.state.user.lastName,
            email:  this.state.user.heroesOfTheStorm,
            age:  this.state.user.age,
            city:  this.state.user.city,
            state:  this.state.user.state,
            games: {
              HeroesOfTheStorm: {
                  GamerTag: this.state.user.games.HeroesOfTheStorm.GamerTag,
                  Rank: this.state.user.games.HeroesOfTheStorm.Rank,
                  Primary: this.state.user.games.HeroesOfTheStorm.Primary,
                  Secondary: this.state.user.games.HeroesOfTheStorm.Secondary
              },
              Overwatch: {
                GamerTag: this.state.user.games.Overwatch.GamerTag,
                Rank: this.state.user.games.Overwatch.Rank,
                Primary: this.state.user.games.Overwatch.Primary,
                Secondary: this.state.user.games.Overwatch.Secondary
              },
              Fortnite: {
                GamerTag: this.state.user.games.Fortnite.GamerTag,
                Rank: this.state.user.games.Fortnite.Rank,
              },
              PUBG: {
                GamerTag: this.state.user.games.PUBG.GamerTag,
                Rank: this.state.user.games.PUBG.Rank,
              },
              WorldOfWarcraft: {
                GamerTag: this.state.user.games.WorldOfWarcraft.GamerTag,
                Rank: this.state.user.games.WorldOfWarcraft.Rank,
                Primary: this.state.user.games.WorldOfWarcraft.Primary,
                Secondary: this.state.user.games.WorldOfWarcraft.Secondary
              },
              DOTA2: {
                GamerTag: this.state.user.games.DOTA2.GamerTag,
                Rank: this.state.user.games.DOTA2.Rank,
                Primary: this.state.user.games.DOTA2.Primary,
                Secondary: this.state.user.games.DOTA2.Secondary
              },
              LeagueOfLegends: {
                GamerTag: this.state.user.games.LeagueOfLegends.GamerTag,
                Rank: this.state.user.games.LeagueOfLegends.Rank,
                Primary: this.state.user.games.LeagueOfLegends.Primary,
                Secondary: this.state.user.games.LeagueOfLegends.Secondary
              },
              CounterStrike: {
                GamerTag: this.state.user.games.CounterStrike.GamerTag,
                Rank: this.state.user.games.CounterStrike.Rank,
                WeaponPreference: this.state.user.games.CounterStrike.WeaponPreference,
                Role: this.state.user.games.CounterStrike.Role
              },
              Starcraft2: {
                GamerTag: this.state.user.games.Starcraft2.GamerTag,
                Rank: this.state.user.games.Starcraft2.Rank,
                PrimaryRace: this.state.user.games.Starcraft2.PrimaryRace,
                SecondaryRace: this.state.user.games.Starcraft2.SecondaryRace
              },
              HearthStone: {
                GamerTag: this.state.user.games.HearthStone.GamerTag,
                Rank: this.state.user.games.HearthStone.Rank,
                PreferedClasses: this.state.user.games.HearthStone.PreferedClasses
              },
              SuperSmashBros: {
                GamerTag: this.state.user.games.SuperSmashBros.GamerTag,
                Rank: this.state.user.games.SuperSmashBros.Rank,
                Primary: this.state.user.games.SuperSmashBros.Primary,
                Secondary: this.state.user.games.SuperSmashBros.Secondary
              },
              StreetFighter: {
                GamerTag: this.state.user.games.StreetFighter.GamerTag,
                Rank: this.state.user.games.StreetFighter.Rank,
                Primary: this.state.user.games.StreetFighter.Primary,
                Secondary: this.state.user.games.StreetFighter.Secondary
              },
              Halo: {
                GamerTag: this.state.user.games.Halo.GamerTag,
                Rank: this.state.user.games.Halo.Rank
              },
              Rainbow6: {
                GamerTag: this.state.user.games.Rainbow6.GamerTag,
                Rank: this.state.user.games.Rainbow6.Rank,
              },
              MagicTheGathering: {
                GamerTag: this.state.user.games.MagicTheGathering.GamerTag,
                Rank: this.state.user.games.MagicTheGathering.Rank,
              },
              Smite: {
                GamerTag: this.state.user.games.Smite.GamerTag,
                Rank: this.state.user.games.Smite.Rank,
                Primary: this.state.user.games.Smite.Primary,
                Secondary: this.state.user.games.Smite.Secondary
              },
              Warcraft3: {
                GamerTag: this.state.user.games.Warcraft3.GamerTag,
                Rank: this.state.user.games.Warcraft3.Rank,
                PrimaryRace: this.state.user.games.Warcraft3.PrimaryRace 
              }
          } 
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
      }
  };
  handleUniversityFormSubmit = event => {
    event.preventDefault();
    if (this.state.user.schoolName) {
        API.updateUser( this.state.user._id, {
            schoolName: this.state.user.schoolName,
            scoutName: this.state.user.scoutName,
            coach: this.state.user.coach,
            heroesOfTheStormOffered: this.state.user.heroesOfTheStormOffered,
            overwatchOffered: this.state.user.overwatchOffered,
            leagueOfLegendsOffered: this.state.user.leagueOfLegendsOffered,
            schoolCity: this.state.user.schoolCity,
            schoolState: this.state.user.schoolState,
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
      }
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name)
    let user = {...this.state.user}
    user[name] = value
    this.setState({user});
  };
  handleInputChangeGame = event => {
    const { name, value, id } = event.target;
    let games = {...this.state.user.games}
    games[id][name] = value
    this.setState({games});
  };
  pressMe = () => {
    console.log(this.state)
  }
  trueFalse = (name, v) => {
      let user = {...this.state.user}
      user[name] = v
    this.setState({user
    })
  }
  discoverUniversities = event => {
      event.preventDefault();
        API.getSpecificUsers({type: 'university'})
        .then(res => this.setState({discovers: res.data}))
        .catch(err => console.log(err));
  }
  discoverPlayers = event => {
    event.preventDefault();
      API.getSpecificUsers({type: 'player'})
      .then(res => this.setState({discovers: res.data}))
      .catch(err => console.log(err));
}

  render() {
    return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Esports Scouting Services</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" onClick={() => this.locationHandler('profile')} >Profile</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={() => this.locationHandler('Discover')} >Discover</a>
            </li>
          </ul>
          <span class="navbar-text">
           Sign out
          </span>
        </div>
      </nav>
      {this.state.user.games ? (
      <form class='container'>
        <div class='row'>
        <div class="form-group col-2">
          <label for="firstName">First Name</label>
          <input onChange={this.handleInputChange} type="input" class="form-control" name='firstName' id="firstName" placeholder="John" />
        </div>
        <div class="form-group col-2">
          <label for="LastName">Last Name</label>
          <input onChange={this.handleInputChange} type="input" class="form-control" name='lastName' id="LastName" placeholder="Doe" />
        </div>
        <div class="form-group col-2">
          <label for="Age">Age</label>
          <input onChange={this.handleInputChange} type="input" class="form-control" name='age' id="Age" placeholder="17" />
        </div>
        <div class="form-group col-2">
          <label for="Email">Email</label>
          <input onChange={this.handleInputChange} type="email" class="form-control" name='email' id="Email" placeholder="example@example.com" />
        </div>
        <div class="form-group col-2">
          <label for="State">State</label>
          <input onChange={this.handleInputChange} type="input" class="form-control" name='state' id="State" placeholder="CO" />
        </div>
        <div class="form-group col-2">
          <label for="City">City</label>
          <input onChange={this.handleInputChange} type="input" class="form-control" name='city' id="City" placeholder="Denver" />
        </div>
        </div>
        <div class='row'>
          {Object.keys(this.state.user.games).map((game, i) => (
            <div key={game} class="col-3">
            <div class='form-group'>
            <h3> {game.split(/(?=[A-Z])/)} </h3>
              {Object.keys(this.state.user.games[game]).map((option, i) => (
                <div key={i}>
                  <label for={option}>{option.split(/(?=[A-Z])/)}</label>
                  <input type="input" class="form-control" id={game} name={option} onChange={this.handleInputChangeGame} defaultValue={this.state.user.games[game][option]}/>
                </div>
              ))}
            </div>
            </div>
          ))}
        </div>
        <button onClick={this.handlePlayerFormSubmit} type="submit" class="btn btn-primary">Submit</button>
      </form>):(<div> log in to see this page</div>)}
 <button onClick={() => this.pressMe()}> 
   press me
 </button>

      </div>
    );
  }
}

export default Profile;
