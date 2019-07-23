import React, { Component } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import EditCourtForm from "./EditCourtForm";
import SinglePlayerPage from "../Player/SinglePlayerPage";
export default class SingleCourtPage extends Component {
  state = {
    court: {},
    reDirectToHome: false,
    players: []
  };

  componentDidMount() {
    axios.get(`/api/courts/${this.props.match.params.courtId}`).then(res => {
      this.setState({ court: res.data });
    });
    axios
      .get(`/api/players/byCourtId/${this.props.match.params.courtId}`)
      .then(res => {
        this.setState({ players: res.data });
      });
  }

  handleDeleteCourt = () => {
    axios.delete(`/api/courts/${this.state.court._id}`).then(() => {
      this.setState({ reDirectToHome: true });
    });
  };

  //Players Component

  getAllPlayers() {
    axios.get(`/api/courts/${this.state.court._id}`).then(res => {
      this.setState({ players: res.data });
    });
  }

  render() {
    if (this.state.reDirectToHome) {
      return <Redirect to="/courts" />;
    }
    let playerArray = this.state.players.map(singlePlayer => {
      return (
        <div>
          <Link
            to={`/players/${singlePlayer._id}`}
            name={singlePlayer.name}
            position={singlePlayer.position}
            ageGroup={singlePlayer.ageGroup}
            bio={singlePlayer.bio}
          >
            {singlePlayer.name}
          </Link>
        </div>
      );
    });
    return (
      <div>
        <h1>Single Court:</h1>
        <Link to={`/courts/${this.state.court._id}/edit`}>
          Edit Court Details{" "}
        </Link>
        <button onClick={this.handleDeleteCourt}>Delete Court</button>
        <h2> {this.state.court.gymName}</h2>
        <h3> Address: {this.state.court.address}</h3>
        <p>Number of Players Needed: {this.state.court.numberOfPlayers}</p>
        <p>Entry Price: {this.state.court.entryPrice}</p>
        <button>
          <a href="/courts">Return To Courts</a>
        </button>

        <h2>Current Players:</h2>
        <div />
        <Link to={`/player/${this.state.court._id}/create`}>
          Create A Player
        </Link>
        <h2>View Players:</h2>
        {playerArray}
        <h1></h1>
      </div>
    );
  }
}
