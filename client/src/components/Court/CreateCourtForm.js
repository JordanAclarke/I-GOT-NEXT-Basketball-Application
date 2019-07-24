import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import AllCourtsPage from "./AllCourtsPage";
export default class CreateCourtForm extends Component {
  state = {
    newCourt: {},
    reDirectToHome: false
  };
  componentDidMount() {
    this.getAllCourts();
  }
  getAllCourts = () => {
    axios.get("/api/courts").then(res => {
      this.setState({ courts: res.data });
    });
  };

  handleNewCourt = event => {
    event.preventDefault();
    const copiedCourt = { ...this.state.newCourt };
    copiedCourt[event.target.name] = event.target.value;

    this.setState({ newCourt: copiedCourt });
  };

  addNewCourt = event => {
    event.preventDefault();
    axios.post(`/api/courts`, this.state.newCourt).then(() => {
      this.setState({ reDirectToHome: true });
      this.getAllCourts();
    });
  };

  render() {
    if (this.state.reDirectToHome) {
      return <Redirect to="/courts" />;
    }
    return (
      <div>
        <div class='form-wrap'>
        <form onSubmit={this.addNewCourt}>
          <label htmlFor="court-gym-name">Court Name</label>
          <input
            type="text"
            id="court-gym-name"
            name="gymName"
            onChange={this.handleNewCourt}
            value={this.state.newCourt.gymName}
          />

          <label htmlFor="court-address">Address:</label>
          <input
            type="text"
            id="court-address"
            name="address"
            onChange={this.handleNewCourt}
            value={this.state.newCourt.address}
          />

          <label htmlFor="court-number-of-players">Players Needed:</label>
          <input
            type="text"
            id="court-number-of-players"
            name="numberOfPlayers"
            onChange={this.handleNewCourt}
            value={this.state.newCourt.numberOfPlayers}
          />

          <label htmlFor="entry-price">Entry Price:</label>
          <input
            type="text"
            id="court-entry-price"
            name="entryPrice"
            onChange={this.handleNewCourt}
            value={this.state.newCourt.entryPrice}
          />

          <input type="submit" value="Create Court" />
        </form>
        </div>
      </div>
    );
  }
}
