import React, { useEffect, useState } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import axios from 'axios'

//needs ID prop
export default function PlayerInfo(props) {

    const [playerInfo, setPlayerInfo] = useState()

    useEffect(()=>{
        axios.get(`https://statsapi.web.nhl.com/api/v1/people/${props.id}`).then((res)=>{
            setPlayerInfo(res.data.people[0])
        })
      },[])

      useEffect(()=>{
      
      },[playerInfo])

      useEffect(()=>{

      },[props])


if (!playerInfo) return


  return (
    <Flex direction={'row'} >
          <Flex direction={'column'} align={"baseline"} mx="1rem">
        <Text>Name: {playerInfo.fullName}</Text>
        <Text>Number: #{playerInfo.primaryNumber}</Text>
        <Text>Team: {playerInfo.currentTeam.name}</Text>
        </Flex>
        <Flex direction={'column'} align={"baseline"}>
          <Text>Position: {playerInfo.primaryPosition.name}</Text>
          <Text>Age: {playerInfo.currentAge}</Text>
          <Text>Birthplace: {playerInfo.birthCity}, {playerInfo.birthStateProvince}, {playerInfo.birthCountry}</Text>
        </Flex>
        </Flex>
  )
}
