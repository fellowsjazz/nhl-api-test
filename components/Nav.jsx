import React from "react";
import Link from "next/link";
import { Flex, Button, HStack } from "@chakra-ui/react";

export default function Nav() {
  return (
    <Flex justify={"center"} align="center">
        <HStack spacing="5px">
      <Link href={"/"}>
        <Button size={'sm'} variant={'ghost'}>Home</Button>
      </Link>
      <Link href={"players"}>
      <Button size={'sm'} variant={'ghost'}>Players</Button>
      </Link>
      </HStack>
    </Flex>
  );
}
