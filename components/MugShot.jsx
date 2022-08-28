import React, { useEffect, useState } from 'react'
import { getPlayerMugshot } from "@nhl-api/players";
import axios from 'axios';
import Link from "next/link"
import { Image } from '@chakra-ui/react';

//props are id={}

export default function MugShot(props) {

    const [playerData, setPlayerData] = useState()
    const [team, setTeam] = useState()

    useEffect(()=>{
        axios.get(`https://statsapi.web.nhl.com/api/v1/people/${props.id}`).then((res) => {   //gets player data
 
            setPlayerData(res.data.people[0])
            
        })
    },[])

    useEffect(()=>{
        if(!playerData) return
        console.log(playerData)                     //gets team link to request team abbreviation for getPlayerMugshot
        const {currentTeam :{link}} = playerData
        axios.get(`https://statsapi.web.nhl.com${link}`).then((res)=>{
            console.log("team response: ", res)
            setTeam(res.data.teams[0].abbreviation)
        })
    },[playerData])

    useEffect(()=>{
        console.log("Team: ", team)
    },[team])

    if(!team) return

  return (
    <Link href={`/players/${props.id}`}>
      <Image boxSize={"200px"} src={getPlayerMugshot({
        id: props.id,
        team: team,
        year: 20222023,
      })} />
    </Link>
  )
}
