import React from "react";
import PlayerCard from "./PlayerCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { Flex } from "@chakra-ui/react";
import {getPlayerMugshot} from "@nhl-api/players"
import MugShot from "./MugShot";

export default function RenderTeam(props) {
  const [roster, setRoster] = useState();
  
  


  useEffect(() => {
    if(!props.teamId) return
    axios
      .get(`https://statsapi.web.nhl.com/api/v1/teams/${props.teamId}?expand=team.roster`)
      .then((res) => {
       
        setRoster(res.data.teams[0].roster.roster);
      });
  }, [props.teamId]);

  useEffect(()=>{
   
    console.log("RenderTeam Props Changes")
    handleSelectionChange()
  },[props])

    function handleSelectionChange(){
      if (!roster) return
      return (
        <Flex direction={"column"}>
          {roster.map(({ jerseyNumber, person: { fullName, id, link } }) => {
            
            return <PlayerCard id={id}/>;
          })}
        </Flex>
      )

    }


  if (props.teamId == undefined) return <div style={{height: "100%"}}></div>;

  if (roster == undefined) return <div style={{height: "100%"}}></div>;

  

  return (
    <Flex direction={"column"}>
      {roster.map(({ jerseyNumber, person: { fullName, id, link } }) => {
        
        return <PlayerCard id={id}/>;
      })}
    </Flex>
  );
}


// There are a couple bugs, components don't rerender properly when you change your selection.   **YOU CAN DO THIS BY SAVING DATA TO LOCAL STORAGE**

//Could also work on making it so when you click back, it saves the selected team state so you dont have to re enter that info

//Could spend time making profile page prettier