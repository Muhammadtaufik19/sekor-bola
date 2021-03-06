import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
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
      console.log("team:", team);

      //   console.log(team);
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
    getDataTeam();
  }, []);

  console.log("team:", team);
  return (
    <div>
      <div className="container">
        <div>
          <h5 className="text-center " style={{ paddingTop: 120 }}>
            Logo
          </h5>
          {loadding ? (
            <h5 className="text-center" style={{ color: "dodgerblue" }}>
              Loading . . . .{" "}
            </h5>
          ) : (
            ""
          )}
        </div>
        <div>
          {team.map((team, index) => {
            return <img src={team.crestUrl} style={{ width: 250 }}></img>;
          })}
        </div>
      </div>
    </div>
  );
}
