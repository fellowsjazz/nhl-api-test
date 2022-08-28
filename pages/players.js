import React, { useEffect, useState } from 'react'

import axios from 'axios'

import { Box, Flex, Select } from '@chakra-ui/react'
import PlayerCard from "../components/PlayerCard"
import RenderTeam from '../components/RenderTeam'



export default function players() {

  const [teamList, setTeamList] = useState()
  const [selectedTeam, setSelectedTeam] = useState()

  useEffect(()=>{
    axios.get("https://statsapi.web.nhl.com/api/v1/teams").then((res)=>{
      console.log("teams query response: ", res)
      setTeamList(res.data.teams)
    })
  },[])

  useEffect(()=>{
    console.log("selected team: ", selectedTeam)
  },[selectedTeam])

  function handleSelect(id){
    setSelectedTeam(id)
  }

  if(!teamList) return

  return (
    <>
    <Box align={'center'} my="1rem" height={'100%'}>
      This is the players page
    
    <Flex direction={"column"}>
    <Select placeholder='Select Team' onChange={(e)=> handleSelect(e.target.value)}>
      {teamList.map(({name, id})=>{
        return <option value={id}>{name}</option>
      })}
    
    



    </Select>
    <RenderTeam teamId={selectedTeam}/>
    </Flex>
    </Box>
    </>
  )
}
