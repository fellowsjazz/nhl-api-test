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
import React from "react";
import logo from "../public/nhl.png";

export default function PlayerCard(props) {

    console.log(props)


  return (
    <Container bg={"whiteAlpha.400"} borderRadius="3px" py="1rem" my="1rem">
      <Flex justify="center" direction="column" align={"center"}>
        <Image
          src="https://assets.stickpng.com/thumbs/5a4fbb7bda2b4f099b95da15.png"
          boxSize={"100px"}
        />
        <Text>{props.name}</Text>
        <Text>{props.number}</Text>
        <Text>Player Team</Text>
      </Flex>
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
              <Td>Goals</Td>
              <Td isNumeric>7</Td>
            </Tr>
            <Tr>
              <Td>Assists</Td>
              <Td isNumeric>45</Td>
            </Tr>
            <Tr>
              <Td>Points</Td>
              <Td isNumeric>52</Td>
            </Tr>
            <Tr>
              <Td>Shots</Td>
              <Td isNumeric>34</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
}
