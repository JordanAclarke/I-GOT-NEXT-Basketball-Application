import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
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
        <h1>Hello, I'm</h1>
        <h2>{this.state.player.name}</h2>
        <p>I Play {this.state.player.position}</p>
        <p>Age: {this.state.player.ageGroup}</p>
        <p>Bio: {this.state.player.bio}</p>

        <button onClick={this.handleDeletePlayer}>Delete Player</button>
      </div>
    );
  }
}
