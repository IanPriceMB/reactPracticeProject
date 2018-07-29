import React, { Component } from 'react';
import API from '../utils/API';
import logo from '../logo.png';

const styles = {
    img: {
        maxWidth: 100,
        margin: '0 auto',
        display: 'block'
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
  handlePlayerFormSubmit = event => {
    event.preventDefault();
    if (this.state.user.firstName && this.state.user.lastName) {
        API.updateUser( this.state.user._id, {
            firstName: this.state.user.firstName,
            lastName:  this.state.user.lastName,
            heroesOfTheStorm:  this.state.user.heroesOfTheStorm,
            gamerTag:  this.state.user.gamerTag,
            rank:  this.state.user.rank,
            heroesOfTheStormPrimary:  this.state.user.heroesOfTheStormPrimary,
            heroesOfTheStormSecondary:  this.state.user.heroesOfTheStormSecondary,
            age:  this.state.user.age,
            city:  this.state.user.city,
            state:  this.state.user.state
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
    let user = {...this.state.user}
    user[name] = value
    this.setState({user
    });
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
  signOut = () => {
    API.signOut()
    .then(res => console.log(res))
    .catch(err => console.log(err));
  };

  render() {
    return (
        <div>
        <header style={styles.header}>
          <span style={styles.signout} onClick={this.signOut}>Sign out</span>
        </header>
        <h1 style={styles.text}>Esports Scouting Services</h1>
            <nav style={styles.nav}>
                <ul>
                    <li style={styles.span} onClick={() => this.locationHandler('profile')}>Profile</li>
                    <li style={styles.span} onClick={() => this.locationHandler('discover')}>Discover</li>
                </ul>
                <img style={styles.img} src={logo} alt='logo'/>
            </nav>
        {this.state.user._id === this.props.match.params.id && this.state.user.type === 'player' && this.state.location==='profile' ? (
        <div>
            <main style={styles.form}>
                <form >
                    First name:<br />
                    <input type='text'  name="firstName" defaultValue={this.state.user.firstName}
                    onChange={this.handleInputChange}/>
                <br />
                Last name:<br />
                <input  name="lastName" defaultValue={this.state.user.lastName}
                  onChange={this.handleInputChange} />
                <br />
                Heroes of the Storm:<br />
                <button style={styles.button} type='button' onClick={() => this.trueFalse('heroesOfTheStorm', true)}>Yes</button>
                <button style={styles.button} type='button' onClick={() => this.trueFalse('heroesOfTheStorm', false)}>No</button>
                <br />
                Gamer Tag:<br />
                <input  name="gamerTag" defaultValue={this.state.user.gamerTag}
                  onChange={this.handleInputChange} />
                  {this.state.user.heroesOfTheStorm ? (
                    <div >
                    Primary Heroes of the Storm Role:<br />
                    <input  name="heroesOfTheStormPrimary" defaultValue={this.state.user.heroesOfTheStormPrimary}
                       onChange={this.handleInputChange}/>
                    <br />
                    Secondary Heroes of the Storm Role:<br />
                    <input  name="heroesOfTheStormSecondary" defaultValue={this.state.user.heroesOfTheStormSecondary}
                       onChange={this.handleInputChange}/>
                    <br />
                    </div>
                ):(<div></div>)}
                Rank:<br />
                <input  name="rank" defaultValue={this.state.user.rank}
                   onChange={this.handleInputChange}/>
                <br />
                Age:<br />
                <input  name="age" defaultValue={this.state.user.age}
                   onChange={this.handleInputChange}/>
                <br />
                City:<br />
                <input  name="city" defaultValue={this.state.user.city}
                   onChange={this.handleInputChange}/>
                <br />
                State:<br />
                <input  name="state" defaultValue={this.state.user.state}
                   onChange={this.handleInputChange}/>
                <button style={styles.button2} type='submit' onClick={this.handlePlayerFormSubmit}>Update</button>
                </form>
            </main>
        </div>
        ) : 
        this.state.user._id === this.props.match.params.id && this.state.user.type === 'university' && this.state.location==='profile' ?(
        <div>
            <main style={styles.form}>
                <form >
                School Name:<br />
                <input type='text'  name="schoolName" defaultValue={this.state.user.schoolName}
                   onChange={this.handleInputChange}/>
                <br />
                Head Coach:<br />
                <input  name="coach" defaultValue={this.state.user.coach}
                  onChange={this.handleInputChange} />
                  <br />
                Head Scout:<br />
                <input  name="scoutName" defaultValue={this.state.user.scoutName}
                  onChange={this.handleInputChange} />
                <br />
                Heroes of the Storm:<br />
                <button style={styles.button} type='button' onClick={() => this.trueFalse('heroesOfTheStormOffered', true)}>yes</button>
                <button style={styles.button} type='button' onClick={() =>this.trueFalse('heroesOfTheStormOffered', false)}>no</button>
                <br />
                Overwatch:<br />
                <button style={styles.button} type='button' onClick={() => this.trueFalse('overwatchOffered', true)}>yes</button>
                <button style={styles.button} type='button' onClick={() =>this.trueFalse('overwatchOffered', false)}>no</button>
                <br /> 
                League of Legends:<br />
                <button style={styles.button} type='button' onClick={() => this.trueFalse('leagueOfLegendsOffered', true)}>yes</button>
                <button style={styles.button} type='button' onClick={() =>this.trueFalse('leagueOfLegendsOffered', false)}>no</button>
                <br /> 
                City:<br />
                <input  name="schoolCity" defaultValue={this.state.user.schoolCity}
                   onChange={this.handleInputChange}/>
                <br />
                State:<br />
                <input  name="schoolState" defaultValue={this.state.user.schoolState}
                   onChange={this.handleInputChange}/>
                <br />
                <br />
                <button style={styles.button2} type='submit' onClick={this.handleUniversityFormSubmit}>Update</button>
                </form>
            </main>
        </div>
        ) : 
        this.state.user._id === this.props.match.params.id && this.state.user.type === 'player' && this.state.location==='discover' ? (
        <div>
            <button style={styles.button} type='submit' onClick={this.discoverUniversities}>Discover</button>
            {this.state.discovers.length ? (<ul>
                {this.state.discovers.map(discovered => (
                    
                  <li style={styles.discovered} key={discovered._id}>
                    <h1>
                      <strong>
                        {discovered.schoolName} - {discovered.schoolCity}, {discovered.schoolState} <br />
                      </strong>
                    </h1>
                      <h3>Esports available on campus</h3>
                      <ul>
                          {discovered.overwatchOffered ? (<li>Overwatch</li>):(<div></div>)}
                          {discovered.heroesOfTheStormOffered ? (<li>Hero of the Storm</li>):(<div></div>)}
                          {discovered.leagueOfLegendsOffered ? (<li>League of Legends</li>):(<div></div>)}
                      </ul>
                      <br />
                      <span>Head Coach: {discovered.coach}</span> <br />
                      <span>Head Scout: {discovered.scoutName}</span>
                  </li>
                ))}
              </ul>) : ( <h3>No Results to Display</h3>)}
        </div>
        ) :
        this.state.user._id === this.props.match.params.id && this.state.user.type === 'university' && this.state.location==='discover' ? (
            <div>
            <button style={styles.button} type='submit' onClick={this.discoverPlayers}>Discover</button>
            {this.state.discovers.length ? (<ul>
                {this.state.discovers.map(discovered => (
                    
                  <li style={styles.discovered} key={discovered._id}>
                    <h1>
                      <strong>
                        {discovered.firstName} "{discovered.gamerTag}" {discovered.lastName} <br />
                      </strong>
                    </h1>
                      <h3>Games Played</h3>
                      <ul>
                          {discovered.heroesOfTheStorm ? (
                            <div>
                                <div>Primary Role: {discovered.heroesOfTheStormPrimary}</div>
                                <div>Secondary Role: {discovered.heroesOfTheStormSecondary}</div>
                          </div>):(<div></div>)}
                      </ul>
                      <br />
                      <span>Age: {discovered.age}</span> <br />
                      <span>City: {discovered.city}</span> <br />
                      <span>State: {discovered.state}</span>
                  </li>
                ))}
              </ul>) : ( <h3>No Results to Display</h3>)}
            </div>) : (
          <div>

          </div>
        )}
        <button onClick={() => this.pressMe()}> 
          press me
        </button>
      </div>
    );
  }
}

export default Profile;
