import React, { useEffect, useState } from 'react'

import { Box, Flex } from '@chakra-ui/react'
import PlayerCard from "../components/PlayerCard"
import RenderTeam from '../components/RenderTeam'


export default function players() {


  return (
    <>
    <Box align={'center'} my="1rem">
      This is the players page
    </Box>
    <Flex direction={"column"}>
    <PlayerCard name="Sample" number="34"/>
    <RenderTeam/>
    </Flex>
    </>
  )
}
