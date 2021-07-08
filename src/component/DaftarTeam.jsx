import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Content() {
  const [team, setTeam] = useState([]);
  const [loadding, setLoading] = useState(true);

  const ApiKey = "8592eae856c7437ab557faf50a45eabe";
  const baseUrl = "https://api.football-data.org/v2/";
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

  const getDataTeam = async () => {
    try {
      setLoading(true);
      const res = await axios.get(teamEndPoin, fetchHeader);
      const teams = res.data.teams;
      setTeam(teams); //   setelah si ubah statenya error
      setLoading(false);
      //   console.log(team);
    } catch (error) {
      console.log(error.ressponse);
    }
  };
  //   effect
  useEffect(() => {
    getDataTeam();
  }, []);

  return (
    <div className="bg-content">
      <div className="container">
        <h5>Premier League Clubs</h5>
        {loadding ? (
          <h5 className="text-center" style={{ color: "dodgerblue" }}>
            Loading . . . .{" "}
          </h5>
        ) : (
          ""
        )}
        <table className="table table-hover  table-dark">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Logo</th>
              <th scope="col">Name</th>
              <th scope="col">Founded</th>
              <th scope="col">Venue</th>
            </tr>
          </thead>

          {team.map((team, index) => {
            return (
              <tbody>
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <img src={team.crestUrl} style={{ width: 90 }}></img>
                  </td>
                  <td>{team.name}</td>
                  <td>{team.founded}</td>
                  <td>{team.venue}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}
