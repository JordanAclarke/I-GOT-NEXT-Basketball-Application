import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Home extends Component {
    render() {
        return (
            <div>
                <h1 id='title'>I G🏀T NE<img src='https://previews.123rf.com/images/fotovika/fotovika1201/fotovika120100031/11930137-illustration-of-a-letter-x-from-a-chain-on-a-white-background.jpg' height='65' width='52'></img>T </h1>
                <Link to="/courts">
                <img src='https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' height='442' width='442'></img>
                </Link>
              {/* <Link to='/courts' >View Courts</Link> */}
            </div>
        )
    }
}
