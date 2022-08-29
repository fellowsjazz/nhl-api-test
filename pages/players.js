import React, { useEffect, useState } from 'react'

import axios from 'axios'

import { Box, Flex, Select } from '@chakra-ui/react'
import PlayerCard from "../components/PlayerCard"
import RenderTeam from '../components/RenderTeam'



export default function players() {

  const [teamList, setTeamList] = useState()
  const [selectedTeam, setSelectedTeam] = useState()
  const [state, updateState] = useState()

  

  useEffect(()=>{
    axios.get("https://statsapi.web.nhl.com/api/v1/teams").then((res)=>{
      setTeamList(res.data.teams)
      if(localStorage.getItem('selectedTeam')){                                     //This checks if a local storage key exists, and set the selected team to previous state
        setSelectedTeam(localStorage.getItem('selectedTeam'))
      }
    })
  },[])

  useEffect(()=>{
    
    console.log("selected team: ", selectedTeam)
    if (selectedTeam) //this makes sure that I don't overwrite selectedTeam with undefined on the first two react renders
      localStorage.setItem('selectedTeam', selectedTeam)
      
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
    <Select placeholder='Select Team' defaultValue={selectedTeam} onChange={(e)=> handleSelect(e.target.value)}>
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
