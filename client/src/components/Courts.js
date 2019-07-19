/* Step 1 import React, { Component } and axios
 *
 */
import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

/* Step 2
 * Rename this class to reflect the component being created
 *
 */
export default class Courts extends Component {

    /* Step 3
    * Create a state for the component to store view data
    *
    */
    state = {
        courts: [],
        isNewFormDisplayed: false,
        newCourt : {
            gymName: '',
            address: '',
            numberOfPlayers: '',
            entryPrice: ''
        }
    }

    /* Step 4
    * Use componentDidMount to retrieve any data to display
    *   Here you can make calls to your local express server
    *   or to an external API
    *   setState can be run here as well
    *   -REMINDER remember `setState` it is an async function
    */
    componentDidMount() {
        this.getAllCourts()
    }

    getAllCourts = () => {
        axios.get('/api/courts')
            .then((res) => {
                this.setState({courts: res.data})
            })
    }

    handleToggleNewForm = () => {
        this.setState((state) => {
            return {isNewFormDisplayed: !state.isNewFormDisplayed}
        })
    }

    handleInputChange = (event) => {
        const copiedCourt = {...this.state.newCourt}
        copiedCourt[event.target.name] = event.target.value

        this.setState({newCourt: copiedCourt})
    }

    handleSubmit = (event) => {
        event.preventDefault()

        axios.post(`/api/courts`, this.state.newCourt)
        .then(() => {
            this.setState({isNewFormDisplayed: false})
            this.getAllCourts()
        })
    }

    /* Step 5
    *  The render function manages what is shown in the browser
    *  TODO: delete the jsx returned
    *   and replace it with your own custom jsx template
    *
    */
    render() {
        let courtsList = this.state.courts.map((court) => {
            return (
                <div>
                <Link 
                key={court._id}
                to={`/courts/${court._id}`}
                >
                {court.gymName}
                </Link>
                </div>

            )
        })
        return (
            this.state.isNewFormDisplayed
            ?
                 <form onSubmit={this.handleSubmit}>
                <label htmlFor='court-gym-name'>Court Name</label>
                <input
                type='text'
                id='court-gym-name'
                name='gymName'
                onChange={this.handleInputChange}
                value={this.state.newCourt.gymName}
                />

                <label htmlFor='court-address'>Address:</label>
                <input
                type='text'
                id='court-address'
                name='address'
                onChange={this.handleInputChange}
                value={this.state.newCourt.address}
                />

                <label htmlFor='court-number-of-players'>Players Needed:</label>
                <input
                type='text'
                id='court-number-of-players'
                name='numberOfPlayers'
                onChange={this.handleInputChange}
                value={this.state.newCourt.numberOfPlayers}
                />

                <label htmlFor='entry-price'>Entry Price:</label>
                <input
                type='text'
                id='court-entry-price'
                name='entryPrice'
                onChange={this.handleInputChange}
                value={this.state.newCourt.entryPrice}
                />

                <input type='submit' value='Create Court' />
            </form>
            :
            <div>
                {/* Accessing the value of message from the state object */}
                <button onClick={this.handleToggleNewForm}>Add Your Court</button>
                {courtsList}
            </div>
        )
    }
}
