import React, { Component } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
export default class EditCourtForm extends Component {
state = {
    court: {},
    reDirectToHome: false,
}
    componentDidMount() {
        axios.get(`/api/courts/${this.props.match.params.courtId}`)
            .then((res) => {
                this.setState({court: res.data})
            })
    }
    handleEditInputChange =(event) => {
        const copiedCourt = {...this.state.court}
        copiedCourt[event.target.name] = event.target.value
        this.setState({court: copiedCourt})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.put(`/api/courts/${this.state.court._id}`, this.state.court)
        .then((res) => {
            this.setState({
                court: res.data,
            })
            this.setState({reDirectToHome: true})
        })
    }
    render() {
        if(this.state.reDirectToHome) {
            return <Redirect to='/courts' />
        }
        return (
            <div>
                <h1>Please Fill Out All Details:</h1>
                <form onSubmit={this.handleSubmit}>
                <label htmlFor='court-gym-name'>Court Name</label>
                <input
                type='text'
                id='court-gym-name'
                name='gymName'
                onChange={this. handleEditInputChange}
                value={this.state.court.gymName}
                />

                <label htmlFor='court-img-link'>Picture Of Court:</label>
                <input
                type='text'
                id='court-img-link'
                name='imgLink'
                onChange={this. handleEditInputChange}
                value={this.state.court.imgLink}
                />

                <label htmlFor='court-address'>Address:</label>
                <input
                type='text'
                id='court-address'
                name='address'
                onChange={this. handleEditInputChange}
                value={this.state.court.address}
                />

                <label htmlFor='court-number-of-players'>Players Needed:</label>
                <input
                type='text'
                id='court-number-of-players'
                name='numberOfPlayers'
                onChange={this. handleEditInputChange}
                value={this.state.court.numberOfPlayers}
                />

                <label htmlFor='entry-price'>Entry Price:</label>
                <input
                type='text'
                id='court-entry-price'
                name='entryPrice'
                onChange={this. handleEditInputChange}
                value={this.state.court.entryPrice}
                />

                    <label htmlFor='date'>Date:</label>
                    <input type="date" name="date" 
                     onChange={this. handleEditInputChange}
                     value={this.state.court.date}
                    />

                <input type='submit' value='Update Court Details' />
            </form>
            </div>
        )
    }
}
