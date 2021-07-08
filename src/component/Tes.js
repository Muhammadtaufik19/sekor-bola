import React, { Component } from "react";
import axios from "axios";

export default class Tes extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const ApiKey = "8592eae856c7437ab557faf50a45eabe";
    const baseUrl = "http://api.football-data.org/v2/";
    const leagueId = "2021";
    const baseEndPoin = `${baseUrl}competitions/${leagueId}`;
    const teamEndPoin = `${baseUrl}competitions/${leagueId}/teams`;
    const standingEndPoin = `${baseUrl}competitions/${leagueId}/standings`;
    const matchEndPoin = `${baseUrl}competitions/${leagueId}/matches`;
    //   akses api
    const fetchHeader = {
      headers: {
        "X-Auth-Token": ApiKey,
      },
    };

    axios.get(teamEndPoin, fetchHeader).then((res) => {
      const respon = res.data.teams;
      this.setState(respon);
      console.log(this.state.data);
    });
  }

  render() {
    const nama = "Taufik";
    return <div>Halo</div>;
  }
}
