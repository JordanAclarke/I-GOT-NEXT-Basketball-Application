import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import {Button, Nav, Navbar} from 'react-bootstrap'
import DisplayProfile from "./DisplayProfile";
import SingleCourtPage from "../Court/SingleCourtPage";
export default class SinglePlayerPage extends Component {
  state = {
    player: [],
    reDirectToHome: false
  };
  componentDidMount() {
    axios.get(`/api/players/${this.props.match.params.playerId}`).then(res => {
      this.setState({ player: res.data });
    });
  }

  handleDeletePlayer = () => {
    axios.delete(`/api/players/${this.props.match.params.playerId}`).then(() => {
      this.setState({ reDirectToHome: true });
    });
  };

  render() {
    if (this.state.reDirectToHome) {
        return <Redirect to={`/courts/${this.state.player.courtId}`}/>;
      }
      
    return (
      <div>
         <Navbar style={{textAlign: "center", display: 'flex', alignContent: 'flexEnd'}} variant="dark">
          <Navbar.Brand style={{color: "#FA8320"}} href="#home">I Got Next</Navbar.Brand>
          <Nav className="mr-auto">
          <Nav.Link style={{color: "#FA8320"}} href="/">Home</Nav.Link>
          <Nav.Link style={{color: "#FA8320"}} href="/courts">Courts</Nav.Link>
    </Nav>
  </Navbar>
  <br />
        <h1>Hello, I'm</h1>
        <h2>{this.state.player.name}</h2>
        <p>I Play {this.state.player.position}</p>
        <p>Age: {this.state.player.ageGroup}</p>
        <p>Bio: {this.state.player.bio}</p>

        <div className='buttons'>
        <Link to={`/courts/${this.state.player.courtId}`}> <Button variant="success">Return To Court</Button></Link>
        <Button variant="danger" onClick={this.handleDeletePlayer}>Delete Player</Button>
        </div>
        
      </div>
    );
  }
}
