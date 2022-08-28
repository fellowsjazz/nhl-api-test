import { Flex } from '@chakra-ui/react'
import React from 'react'
import MugShot from './MugShot'
import PlayerInfo from './PlayerInfo'
import PlayerStats from './PlayerStats'
export default function ProfilePage(props) {
    //need to pass the id prop
  return (
    <Flex>
        <Flex direction={"row"} justify="center">
        <MugShot id={props.id}/>
        <Flex direction="column">
        <PlayerInfo id={props.id}/>
        <PlayerStats id={props.id}/>
        </Flex>
        
        </Flex>
    </Flex>
  )
}
