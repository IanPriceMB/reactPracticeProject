import React, { Component } from 'react';
import API from '../utils/API';
import logo from '../logo.png';
import {Link} from 'react-router-dom'


const styles = {
  img: {
      maxWidth: 100,
      margin: '0 auto',
      display: 'block'
  }, 
  ul: {
    listStyleType: 'none'
  },
  header: {
      width: '100%',
      float: 'left'
  }, 
  signout: {
      padding: 5, 
      float: 'right'
  },
  span: {
      padding: 5, 
      float: 'left'
  },
  button: {
      backgroundColor: 'blue', 
      padding: "5 10",
      color: 'white',
      border: 'none',
      margin: '0px 10px',
      fontSize: '1em'
  }, 
  button2: {
      display: 'block',
      backgroundColor: 'blue', 
      borderRadius: 10,
      padding: '10px 30px',
      color: 'white',
      border: 'none',
      margin: '30px',
      fontSize: '2em'
    }, 
  text: {
      textAlign: 'center',
  },
  nav: {
      width: '10%',
      height: '5000px',
      float: 'left'
  },
  form: {
      float: 'left',
      display: 'block',
      margin: '40px 0px',
      paddingLeft: '30%',
      fontSize: '1.5em'
  },
  discovered: {
      float: 'left',
      display: 'block',
      margin: '40px 0px',
      paddingLeft: '10%',
      fontSize: '1.5em'
  },
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
  handleFormSubmit = event => {
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
          },
          SchoolName: this.state.user.SchoolName,
          ScoutName: this.state.user.ScoutName,
          Coach: this.state.user.CoachName,
          SchoolCity: this.state.user.SchoolCity,
          SchoolState: this.state.user.SchoolState,
          Statement: this.state.user.Statement,
          offeredGames: {
              HeroesOfTheStorm: this.state.user.HeroesOfTheStorm,
              Overwatch: this.state.user.Overwatch,
              Fortnite: this.state.user.Fortnite,
              PUBG: this.state.user.PUBG,
              DOTA2: this.state.user.DOTA2,
              LeagueOfLegends: this.state.user.LeagueOfLegends,
              CounterStrike: this.state.user.CounterStrike,
              Starcraft2: this.state.user.Starcraft2,
              Hearthstone: this.state.user.HearthStone,
              SuperSmashBros: this.state.user.SmashSuperBros,
              StreetFighter: this.state.user.StreetFighter,
              Halo: this.state.user.Halo,
              Rainbow6: this.state.user.Rainbow6,
              Warcraft3: this.state.user.Warcraft3,
              Smite: this.state.user.Smite,
              MagicTheGathering: this.state.user.MagicTheGathering
          } 
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
      }
  };
  handleInputChange = event => {
    const { name, value } = event.target;
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
    this.setState({user})
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
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
              <a class="nav-link" onClick={() => this.locationHandler('discover')} >Discover</a>
            </li>
          </ul>
          <span class="navbar-text">
           Sign out
          </span>
        </div>
      </nav>
      {this.state.user._id === this.props.match.params.id && this.state.user.type === 'player' && this.state.location==='profile' ? (
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
        <button onClick={this.handleFormSubmit} type="submit" class="btn btn-primary">Submit</button>
      </form>) : this.state.user._id === this.props.match.params.id && this.state.user.type === 'university' && this.state.location==='profile' ?(
      <form class='container'>
        <div class='row'>
          <div class="form-group col-2">
            <label for="SchoolName">School Name</label>
            <input onChange={this.handleInputChange} type="input" class="form-control" name='firstName' id="SchoolName" placeholder="University of Denver" />
          </div>
          <div class="form-group col-2">
            <label for="Coach">Coach Name</label>
            <input onChange={this.handleInputChange} type="input" class="form-control" name='lastName' id="Coach" placeholder="Max Walters" />
          </div>
          <div class="form-group col-2">
            <label for="ScoutName">Scout Name</label>
            <input onChange={this.handleInputChange} type="input" class="form-control" name='ScoutName' id="ScoutName" placeholder="Barry White" />
          </div>
          <div class="form-group col-2">
            <label for="SchoolEmail">School Email</label>
            <input onChange={this.handleInputChange} type="input" class="form-control" name='SchoolEmail' id="SchoolEmail" placeholder="example@example.com" />
          </div>
          <div class="form-group col-2">
            <label for="SchoolState">School State</label>
            <input onChange={this.handleInputChange} type="input" class="form-control" name='SchoolState' id="SchoolState" placeholder="CO" />
          </div>
          <div class="form-group col-2">
            <label for="SchoolCity">School City</label>
            <input onChange={this.handleInputChange} type="input" class="form-control" name='state' id="SchoolCity" placeholder="Denver" />
          </div>
          <div class="form-group col-12">
            <label for="Statement">Statement</label>
            <textarea onChange={this.handleInputChange} name='Statement' class="form-control" id="Statement" rows="3"></textarea>
          </div>
        </div>
        <div class='row'>
        <h3 class='col-12'>Select which games you offer</h3>
          {Object.keys(this.state.user.offeredGames).map((game, i) => (
            <div key={i} class="col-3">           
              <h3> {game.split(/(?=[A-Z])/)} </h3>
              <div class='container-fluid'>
                <div class='row'>
                  <button class='btn btn-info col-5' type='button' onClick={() => this.trueFalse(game, true)}>Yes</button>
                  <div class='col-2' />
                  <button class='btn btn-info col-5' type='button' onClick={() => this.trueFalse(game, false)}>No</button>  
                </div>
              </div>      
            </div>
          ))}
        </div>
        <div class='row justify-content-center'>
          <button onClick={this.handleFormSubmit} type="submit" class="btn btn-success col-3">Submit</button>
        </div>
      </form>
      ) : 
      this.state.user._id === this.props.match.params.id && this.state.user.type === 'player' && this.state.location==='discover' ? (
        <div>
        <button class='btn btn-info' type='submit' onClick={this.discoverPlayers}>Discover</button>
      <div class='container'>
      <div class='row'>
      {this.state.discovers.length ? (
      <ul style={styles.ul} class='col-12 container'>
      <div class='row'>
        {this.state.discovers.map((discovered, j) => (          
          <li class='col-12 container' key={j}>
            <h1>
              <strong>
                {discovered.schoolName}: {discovered.SchoolCity}, {discovered.schoolState} <br />
              </strong>
            </h1>
            <span class='col-4'>Head coach: {discovered.Coach}</span> 
            <span class='col-4'>Lead Scout: {discovered.ScoutName}</span> 
            <span class='col-4'>School Statement: {discovered.Statement}</span>
            <h3>Esports available on campus</h3>
              <div class='row'>
              <ul style={styles.ul} class='col-12 container'>
              <div class='row'>
                {Object.keys(discovered.games).map(game => (
                  <li class='col-4' key={game}>
                    {game.gamerTag !== '' ? (
                      <ul style={styles.ul}>
                        <h3>{game}</h3>
                        {Object.keys(discovered.games[game]).map((option, i) => (
                          <li key={i}>{option}: {discovered.games[game][option]}</li>
                        ))}
                      </ul>
                    ):(<div></div>)}
                  </li>))}
              </div>
              </ul>
              </div>
              <br />
          </li>
        ))}
      </div>
      </ul>) : ( <div></div>)}
      </div>
      </div>
      </div>
      ) :
      this.state.user._id === this.props.match.params.id && this.state.user.type === 'university' && this.state.location==='discover' ? (
      <div>
        <button class='btn btn-info' type='submit' onClick={this.discoverPlayers}>Discover</button>
      <div class='container'>
      <div class='row'>
      {this.state.discovers.length ? (
      <ul style={styles.ul} class='col-12 container'>
      <div class='row'>
        {this.state.discovers.map((discovered, j) => (          
          <li class='col-12 container' key={j}>
            <h1>
              <strong>
                {discovered.firstName} "{discovered.games.CounterStrike.GamerTag}" {discovered.lastName} <br />
              </strong>
            </h1>
            <span class='col-4'>Age: {discovered.age}</span> 
            <span class='col-4'>City: {discovered.city}</span> 
            <span class='col-4'>State: {discovered.state}</span>
              <h3>Games Played</h3>
              <div class='row'>
              <ul style={styles.ul} class='col-12 container'>
              <div class='row'>
                {Object.keys(discovered.games).map(game => (
                  <li class='col-4' key={game}>
                    {game.gamerTag !== '' ? (
                      <ul style={styles.ul}>
                        <h3>{game}</h3>
                        {Object.keys(discovered.games[game]).map((option, i) => (
                          <li key={i}>{option}: {discovered.games[game][option]}</li>
                        ))}
                      </ul>
                    ):(<div></div>)}
                  </li>))}
              </div>
              </ul>
              </div>
              <br />
          </li>
        ))}
      </div>
      </ul>) : ( <div></div>)}
      </div>
      </div>
      </div>
      )
      :(<div> log in to see this page</div>)}
 <button onClick={() => this.pressMe()}> 
   press me
 </button>

      </div>
    );
  }
}

export default Profile;
