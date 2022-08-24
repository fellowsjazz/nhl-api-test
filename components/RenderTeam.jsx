import React from "react";
import PlayerCard from "./PlayerCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { Flex } from "@chakra-ui/react";

export default function RenderTeam() {
  const [team, setTeam] = useState();

  useEffect(() => {
    axios
      .get("https://statsapi.web.nhl.com/api/v1/teams/10?expand=team.roster")
      .then((res) => {
        setTeam(res.data.teams[0].roster.roster);
      });
  }, []);

  if (team == undefined) return;

  console.log(team);

  return (
    <Flex direction={"column"}>
      {team.map(({ jerseyNumber, person: { fullName } }) => {
        return <PlayerCard name={fullName} number={jerseyNumber} />;
      })}
    </Flex>
  );
}

// team.map(({ jerseyNumber, person: { fullName } }) => {
//     console.log("Name: ", fullName, "| Jersey: ", jerseyNumber );
//     return <PlayerCard name={fullName} number={jerseyNumber} />
//   });
