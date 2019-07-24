import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import CreateCourtForm from './CreateCourtForm'

export default class AllCourtsPage extends Component {

    state = {
        courts: [],
        newCourt : {
            gymName: '',
            address: '',
            numberOfPlayers: '',
            entryPrice: ''
        }
    }
    componentDidMount() {
        this.getAllCourts()
    }
    getAllCourts = () => {
        axios.get('/api/courts')
            .then((res) => {
                this.setState({courts: res.data})
            })
    }
   
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
                <h1>Open Courts:</h1>
                <div>
                <Link to='/'>Return Home</Link>
                </div>
                <Link to={`/courts/create`}>Create A Court</Link>
                {courtsList}
            </div>
        )
    }
}

