import React, { Component } from "react";
import axios from "axios";
import {Redirect} from 'react-router-dom'
import SingleCourtPage from '../Court/SingleCourtPage'
export default class CreatePlayerForm extends Component {
  state = {
    newPlayer: {
      name: "",
      ageGroup: "",
      position: "",
      bio: "",
      courtId: ""
    },
    reDirectToHome: false
  };

  componentDidMount() {
    console.log("component did mount is called");
    const idPlayer = { ...this.state.newPlayer };
    idPlayer.courtId = this.props.match.params.courtId;
    console.log("idPlayer", idPlayer);
    this.setState({ newPlayer: idPlayer });
  }

  handleInputChange = event => {
    const copiedPlayer = { ...this.state.newPlayer };
    copiedPlayer[event.target.name] = event.target.value;
    this.setState({ newPlayer: copiedPlayer });
  };

  addNewPlayer = event => {
    event.preventDefault();
    axios.post(`/api/players`, this.state.newPlayer).then(() => {
      this.setState({ reDirectToHome: true });
    });
  };
  render() {

    
    if(this.state.reDirectToHome) {
        return <Redirect to={`/courts/${this.state.newPlayer.courtId}`} />
    }
    return (
      
      <div>
        <form onSubmit={this.addNewPlayer}>
          <label htmlFor="player-name">Player Name:</label>
          <input
            type="text"
            id="player-name"
            name="name"
            onChange={this.handleInputChange}
            value={this.state.newPlayer.name}
          />

          <label htmlFor="player-age-group">Age-Group:</label>
          <input
            type="text"
            id="player-age-group"
            name="ageGroup"
            onChange={this.handleInputChange}
            value={this.state.newPlayer.ageGroup}
          />

          <label htmlFor="player-position">Position:</label>
          <input
            type="text"
            id="player-position"
            name="position"
            onChange={this.handleInputChange}
            value={this.state.newPlayer.position}
          />

          <label htmlFor="player-bio">Biography:</label>
          <input
            type="text"
            id="player-bio"
            name="bio"
            onChange={this.handleInputChange}
            value={this.state.newPlayer.bio}
          />
          <input type="submit" value="Add Player" />
        </form>
      </div>
  
    );
  
  }
}
