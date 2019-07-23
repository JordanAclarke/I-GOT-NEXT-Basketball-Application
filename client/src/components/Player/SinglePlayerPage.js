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
    axios
      .get(`/api/players/${this.props.match.params.playerId}`)
      .then(res => {
        this.setState({ players: res.data });
      });
  }

  handleDeletePlayer = () => {
    axios.delete(`/players`).then(() => {
      this.setState({ reDirectToHome: true });
    });
  };

  render() {
   
    return (
      <div>
        <h1>Hello</h1>
        <h2>{this.state.player.name}</h2>
        <h3>{this.props.position}</h3>
        <p>{this.props.ageGroup}</p>
        <p>{this.props.bio}</p>

        <button onClick={this.handleDeletePlayer}>Delete Player</button>
      </div>
    );
  }
}
