import { Flex } from '@chakra-ui/react'
import React from 'react'
import MugShot from './MugShot'
import PlayerInfo from './PlayerInfo'
import PlayerStats from './PlayerStats'
import {MdOutlineArrowBackIosNew} from 'react-icons/md'
import Link from 'next/link'

export default function ProfilePage(props) {
    //need to pass the id prop
  return (
    <>
    <Link href={"/players"}>
      <a>
      <MdOutlineArrowBackIosNew/>Back
      </a>
    
    </Link>
    
    
    <Flex>
        <Flex direction={"row"} justify="center">
         
        <MugShot id={props.id}/>
        <Flex direction="column">
        <PlayerInfo id={props.id}/>
        <PlayerStats id={props.id}/>
        </Flex>
        
        </Flex>
    </Flex>
    </>
  )
}
