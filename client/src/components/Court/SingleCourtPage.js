import React, { Component } from 'react'
import axios from 'axios'
import {Redirect, Link} from 'react-router-dom'
import EditCourtForm from './EditCourtForm'
export default class SingleCourtPage extends Component {

    state = {
        court: {},
        reDirectToHome: false
    }

    componentDidMount() {
        axios.get(`/api/courts/${this.props.match.params.courtId}`)
            .then((res) => {
                this.setState({court: res.data})
            })
    }

    
    handleDeleteCourt = () => {
        axios.delete(`/api/courts/${this.state.court._id}`)
            .then(() => {
                this.setState({reDirectToHome: true})
            })
    }
        
    render() {
        if(this.state.reDirectToHome) {
            return <Redirect to='/courts' />
        }
        return (
            <div>
                
                <h1>Single Court:</h1>
                <Link to={`/courts/${this.state.court._id}/edit`}>Edit Court Details </Link>
                <button onClick={this.handleDeleteCourt}>Delete Court</button>
                <h2> {this.state.court.gymName}</h2>
                <h3> Address: {this.state.court.address}</h3>
                <p>Number of Players Needed: {this.state.court.numberOfPlayers}</p>
                <p>Entry Price: {this.state.court.entryPrice}</p>
                <button><a href='/courts'>Return To Courts</a></button>
                

                

            </div>
        )
    }
}
