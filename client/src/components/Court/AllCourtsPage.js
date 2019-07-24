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
                <h1>Open Courts/Parks:</h1>
                <div className='link'>
                <Link to='/'><h2>Return Home</h2></Link>
                
                <Link to={`/courts/create`}><h2>Create A Court</h2></Link>
                </div>
                <h2>{courtsList}</h2>
            </div>
        )
    }
}

