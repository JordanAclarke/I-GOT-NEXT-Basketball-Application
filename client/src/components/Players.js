// /* Step 1 import React, { Component } and axios
//  *
//  */
// import React, { Component } from 'react'
// import axios from 'axios'
// import { Link } from 'react-router-dom'
// import SingleCourt from './SingleCourt'
// /* Step 2
//  * Rename this class to reflect the component being created
//  *
//  */
// export default class Players extends Component {

//     /* Step 3
//     * Create a state for the component to store view data
//     *
//     */
//     state = {
//         players: [],
//         isNewFormDisplayed: false,
//         newPlayer: {
//             name: '',
//             ageGroup: '',
//             position: '',
//             bio: ''
//         }
//     }

//     /* Step 4
//     * Use componentDidMount to retrieve any data to display
//     *   Here you can make calls to your local express server
//     *   or to an external API
//     *   setState can be run here as well
//     *   -REMINDER remember `setState` it is an async function
//     */
//     componentDidMount() {
//         this.getAllPlayers()
//     }

//     getAllPlayers() {
//         axios.get('/api/players')
//             .then((res) => {
//                 this.setState({players: res.data})
//             })
//     }

//     handleToggleNewForm = () => {
//         this.setState((state) => {
//             return {isNewFormDisplayed: !state.isNewFormDisplayed}
//         })
//     }

//     handleInputChange = (event) => {
//         const copiedPlayer = {...this.state.newPlayer}
//         copiedPlayer[event.target.name] = event.target.value
//         this.setState({newPlayer: copiedPlayer})
//     }

//     handleSubmit = (event) => {
//         event.preventDefault()

//         axios.post(`/api/players`, this.state.newPlayer)
//         .then(() => {
//             this.setState({isNewFormDisplayed: false})
//             this.getAllPlayers()
//         })
//     }

//     /* Step 5
//     *  The render function manages what is shown in the browser
//     *  TODO: delete the jsx returned
//     *   and replace it with your own custom jsx template
//     *
//     */
//     render() {

//         let playersList = this.state.players.map((player) => {
//             return (
//                 <div>
//                 <Link 
//                 key={player._id}
//                 to={`/players/${player._id}`}>{player.name}</Link>

//                 </div>
//             )
//         })
//         return (
            
//                 this.state.isNewFormDisplayed
//                 ?
//                 <form onSubmit={this.handleSubmit}>
//                 <label htmlFor='player-name'>Player Name:</label>
//                 <input 
//                 type='text'
//                 id='player-name'
//                 name='name'
//                 onChange={this.handleInputChange}
//                 value ={this.state.newPlayer.name}
//                 />

//                 <label htmlFor='player-age-group'>Age-Group:</label>
//                 <input 
//                 type='text'
//                 id='player-age-group'
//                 name='ageGroup'
//                 onChange={this.handleInputChange}
//                 value ={this.state.newPlayer.ageGroup}
//                 />

//                 <label htmlFor='player-position'>Position:</label>
//                 <input 
//                 type='text'
//                 id='player-position'
//                 name='position'
//                 onChange={this.handleInputChange}
//                 value ={this.state.newPlayer.position}
//                 />

//                 <label htmlFor='player-bio'>Biography:</label>
//                 <input 
//                 type='text'
//                 id='player-bio'
//                 name='bio'
//                 onChange={this.handleInputChange}
//                 value ={this.state.newPlayer.bio}
//                 />
//                 <input
//                 type='submit'
//                 value='Add Player'
//                 />
//                 </form>
                
//                 :
//                 <div>
                
//             <button onClick={this.handleToggleNewForm}>Join this court</button>
//                 {playersList}
//                  </div>
//         )
//     }
// }
