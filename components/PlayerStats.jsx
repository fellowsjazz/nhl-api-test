import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Container,
  Flex,
  Image,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";


//props are id
export default function PlayerStats(props) {

const [playerStats, setPlayerStats] = useState()
const [playerInfo, setPlayerInfo] = useState()

useEffect(()=>{
    axios.get(`https://statsapi.web.nhl.com/api/v1/people/${props.id}/stats?stats=statsSingleSeason`).then((res)=>{
        console.log("stats response: ",res)
        setPlayerStats(res.data.stats[0].splits[0].stat)  //get stats
    })
},[])

useEffect(()=>{
  axios.get(`https://statsapi.web.nhl.com/api/v1/people/${props.id}`).then((res)=>{
      console.log("player info: ",res)
      setPlayerInfo(res.data.people[0])
  })
},[])

useEffect(()=>{
   
    console.log("stats: ", playerStats)
},[playerStats])

if (!playerStats) return

  return (
    <div>
      <TableContainer
        borderWidth={"1px"}
        borderColor="black"
        borderRadius={"3px"}
        my="10px"
        mx="40px"
      >
        <Table variant={"unstyled"} size="sm">
          <Thead>
            <Tr>
              <Th>Stat</Th>
              <Th>Value</Th>
            </Tr>
          </Thead>
          <Tbody>
          <Tr>
              <Td>Games Played</Td>
              <Td isNumeric>{playerStats.games}</Td>
            </Tr>
            <Tr>
              <Td>Goals</Td>
              <Td isNumeric>{playerStats.goals}</Td>
            </Tr>
            <Tr>
              <Td>Assists</Td>
              <Td isNumeric>{playerStats.assists}</Td>
            </Tr>
            <Tr>
              <Td>Points</Td>
              <Td isNumeric>{playerStats.points}</Td>
            </Tr>
            <Tr>
              <Td>Shots</Td>
              <Td isNumeric>{playerStats.shots}</Td>
            </Tr>
            <Tr>
              <Td>Hits</Td>
              <Td isNumeric>{playerStats.hits}</Td>
            </Tr>
            <Tr>
              <Td>Plus/Minus</Td>
              <Td isNumeric>{playerStats.plusMinus}</Td>
            </Tr>
            <Tr>
              <Td>Penalty Minutes</Td>
              <Td isNumeric>{playerStats.pim}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      
    </div>
  )
}

// THIS IS WHERE YOU WERE!!! you're trying to now format the stats we're retreiving into some sort of aesthetically pleasing table.  stats are already console logged