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
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
