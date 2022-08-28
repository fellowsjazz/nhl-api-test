import React from "react";
import PlayerCard from "./PlayerCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { Flex } from "@chakra-ui/react";
import {getPlayerMugshot} from "@nhl-api/players"
import MugShot from "./MugShot";

export default function RenderTeam(props) {
  const [roster, setRoster] = useState();
  
  console.log("Team Id received from players.js by renderTeam.jsx: ", props.teamId)


  useEffect(() => {
    if(!props.teamId) return
    axios
      .get(`https://statsapi.web.nhl.com/api/v1/teams/${props.teamId}?expand=team.roster`)
      .then((res) => {
        console.log("res",res)
        setRoster(res.data.teams[0].roster.roster);
      });
  }, [props.teamId]);

  useEffect(()=>{
    console.log("Set Roster:", roster)

  },[roster])

    

  console.log("log of team Id",props.teamId)

  if (props.teamId == undefined) return <div style={{height: "100%"}}></div>;

  if (roster == undefined) return <div style={{height: "100%"}}></div>;

  

  return (
    <Flex direction={"column"}>
      {roster.map(({ jerseyNumber, person: { fullName, id, link } }) => {
        
        return <MugShot id={id}/>;
      })}
    </Flex>
  );
}


// THE GOAL NOW, IS TO GET ALL THE PLAYER STATS TO UPDATE.  FROM THE TEAM ARRAY, YOU CAN GRAB THE INDIVIDUAL PLAYER'S API LINK