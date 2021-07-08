import React, { useState, useEffect } from "react";
import axios from "axios";

export default function JadwalPertandingan() {
  const [matchs, setSmatchs] = useState([]);
  const [loadding, setLoading] = useState(true);

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
  const getDataMatch = async () => {
    try {
      const res = await axios.get(matchEndPoin, fetchHeader);
      const matchDay = res.data;
      setSmatchs(matchDay.matches);
      setLoading(false);
      //   let tes = matchDay;
    } catch (error) {
      console.log("error: ", error.ressponse);
    }
  };

  //   effect
  useEffect(() => {
    getDataMatch();
  }, []);

  console.log("match: ", matchs[300]);
  return (
    <div className="bg-jadwal">
      <div className="container">
        <h5>Premier League fixtures</h5>

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
              <th scope="col">Peserta</th>
              <th scope="col">Tanggal</th>
              <th scope="col">Skor Akhir</th>
            </tr>
          </thead>

          {matchs.map((match, index) => {
            const dt = new Date(match.utcDate).toLocaleDateString("id");
            const scoreHomeTeam =
              match.score.fullTime.homeTeam == null
                ? 0
                : match.score.fullTime.homeTeam;
            const scoreAwayTeam =
              match.score.fullTime.awayTeam == null
                ? 0
                : match.score.fullTime.awayTeam;
            return (
              <tbody>
                <tr>
                  <th>{index + 1}</th>
                  <td>
                    {match.homeTeam.name} <i>Vs</i> {match.awayTeam.name}
                  </td>
                  <td>{dt}</td>
                  <td>
                    {scoreHomeTeam} : {scoreAwayTeam}{" "}
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}
