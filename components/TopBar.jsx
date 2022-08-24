import React from 'react'
import "./Nav"
import Nav from './Nav'
import {Flex, Text, Heading} from "@chakra-ui/react"

export default function TopBar() {
  return (
    <Flex justify={"space-between"} backgroundColor="whiteAlpha.300" borderRadius={"10px"} px="5px" >
      <Heading>NHL API</Heading>
      <Nav/>
    </Flex>
  )
}
