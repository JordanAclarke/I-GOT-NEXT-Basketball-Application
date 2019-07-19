import React, { Component } from 'react'
import axios from 'axios'
import {Redirect, Link} from 'react-router-dom'
export default class SingleCourt extends Component {
state = {
    court: {},
    isEditFormDisplayed: false,
    reDirectToHome: false,

}
    componentDidMount() {
        axios.get(`/api/courts/${this.props.match.params.courtId}`)
            .then((res) => {
                this.setState({court: res.data})
            })
    }

    handleInputChange =(event) => {
        const copiedCourt = {...this.state.court}
        copiedCourt[event.target.gymName] = event.target.value
        this.setState({court: copiedCourt})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.put(`/api/courts/${this.state.court._id}`, this.state.court)
        .then((res) => {
            this.setState({
                court: res.data,
                isEditFormDisplayed: false
            })
        })
    }
    handleToggleEditForm = () => {
        this.setState((state) => {
            return {isEditFormDisplayed: !state.isEditFormDisplayed}
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
            return <Redirect to='/' />
        }

        return (
            <div>
                <h2> {this.state.court.gymName}</h2>
                <h3> Address: {this.state.court.address}</h3>
                <p>Number of Players Coming: {this.state.court.numberOfPlayers}</p>
                <p>Entry Price: {this.state.court.entryPrice}</p>
            </div>
        )
    }
}
