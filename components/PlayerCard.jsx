import React, { useEffect } from 'react'
import { Flex } from '@chakra-ui/react'
import MugShot from './MugShot'
import PlayerInfo from './PlayerInfo'

export default function PlayerCard(props) {


  useEffect(()=>{

  },[props])

  return (
    <Flex>
      <MugShot id={props.id}/>
      <PlayerInfo id={props.id}/>
    </Flex>
  )
}
