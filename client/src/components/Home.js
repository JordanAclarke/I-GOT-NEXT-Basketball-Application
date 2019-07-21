import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Home extends Component {
    render() {
        return (
            <div id='body'>
                <h1 id='title'>I G🏀T NE⛓️T </h1>
                <Link to="/courts">
                    
                <img src='https://live.staticflickr.com/8375/8556578929_7b65859135_b.jpg' height='442' width='842'></img>
                </Link>
            </div>
        )
    }
}
