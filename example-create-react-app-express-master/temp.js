: 
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