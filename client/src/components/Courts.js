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
        isNewFormDisplayed: false
    }

    /* Step 4
    * Use componentDidMount to retrieve any data to display
    *   Here you can make calls to your local express server
    *   or to an external API
    *   setState can be run here as well
    *   -REMINDER remember `setState` it is an async function
    */
    componentDidMount() {
        axios.get('/api/courts')
            .then((res) => {
                this.setState({courts: res.data})
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
            <div>
                {/* Accessing the value of message from the state object */}
                <h1>Hello</h1>
                {courtsList}
            </div>
        )
    }
}
