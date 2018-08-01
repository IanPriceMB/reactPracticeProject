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