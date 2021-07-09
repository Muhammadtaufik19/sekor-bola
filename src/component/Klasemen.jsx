import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Klasemen() {
  const [standings, setStandings] = useState([]);
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

  const getDataStandings = async () => {
    try {
      const res = await axios.get(standingEndPoin, fetchHeader);
      const dataKlasemen = res.data.standings[0].table;
      setStandings(dataKlasemen);
      setLoading(false);
    } catch (error) {
      console.log(error.ressponse);
    }
  };
  //   effect
  useEffect(() => {
    <meta
      http-equiv="Content-Security-Policy"
      content="upgrade-insecure-requests"
    ></meta>;
    getDataStandings();
  }, []);

  return (
    <div className="bg-klasemen">
      <div className="container">
        <h5>Classement Premier League</h5>
        {loadding ? (
          <h5 className="text-center" style={{ color: "dodgerblue" }}>
            Loading . . . .{" "}
          </h5>
        ) : (
          ""
        )}
        <table className="table table-hover table-dark">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col">Nama Tim</th>
              <th scope="col">PG</th>
              <th scope="col">W</th>
              <th scope="col">D</th>
              <th scope="col">L</th>
              <th scope="col">P</th>
            </tr>
          </thead>

          {standings.map((standing, index) => {
            return (
              <tbody>
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <img
                      src={standing.team.crestUrl}
                      style={{ width: 90 }}
                    ></img>
                  </td>
                  <td>{standing.team.name}</td>
                  <td>{standing.playedGames}</td>
                  <td>{standing.won}</td>
                  <td>{standing.draw}</td>
                  <td>{standing.lost}</td>
                  <td>{standing.points}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}
