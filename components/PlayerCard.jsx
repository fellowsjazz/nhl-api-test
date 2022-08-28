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
import React, { useState, useEffect } from "react";
import logo from "../public/nhl.png";
import { getPlayerMugshot } from "@nhl-api/players";
import axios from "axios";
import Link from "next/link"
import MugShot from "./MugShot";

// To use the player card component, you need to pass these props:
// <PlayerCard name={fullName} number={jerseyNumber} id={id} team="TOR"/>

export default function PlayerCard(props) {
 
 const [playerInfo, setPlayerInfo] = useState()

  useEffect(() => {
    axios
      .get(`https://statsapi.web.nhl.com${props.link}`)
      .then((res) => {
        setPlayerInfo(res.data.people[0])
      });
  }, []);



  if (!playerInfo) return

  return (
    <Link href={`/players/${props.id}`}>
    <Container bg={"whiteAlpha.400"} borderRadius="3px" py="1rem" my="1rem">
      <Flex justify="center" direction="column" align={"center"}>
        <MugShot id={playerInfo.id}/>
        <Text>{playerInfo.fullName}</Text>
        
      </Flex>
      
    </Container>
    </Link>
  );
}
