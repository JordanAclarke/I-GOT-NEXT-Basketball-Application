import React, { Component } from 'react'
import axios from 'axios'
import {Redirect, Link} from 'react-router-dom'
export default class SinglePlayer extends Component {

    state = {
        player: {},
        reDirectToHome: false
    }
    componentDidMount() {
        axios.get(`/api/players/${this.props.match.params.playerId}`)
            .then((res) => {
                this.setState({player: res.data})
            })

        
    }

    handleDeletePlayer = () => {
        axios.delete(`/api/players/${this.state.player._id}`)
            .then(() => {
                this.setState({reDirectToHome: true})
            })
    }

    render() {
        if(this.state.reDirectToHome) {
            return <Redirect to='/players' />
        }
        return (
            <div>

                <h2>{this.state.player.name}</h2>
                <h3>{this.state.player.position}</h3>
                <p>{this.state.player.ageGroup}</p>
                <p>{this.state.player.bio}</p>

                <button onClick={this.handleDeletePlayer}>Delete Player</button>
            </div>
        )
    }
}
