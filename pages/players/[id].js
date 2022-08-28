import { useRouter } from "next/dist/client/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Flex, Container } from "@chakra-ui/react";
import ProfilePage from "../../components/ProfilePage";

import React from 'react'

export default function () {

  const router = useRouter()
    const { id } = router.query

    


  return (
    <Flex h={"100vh"}>
    <Flex bg={"whiteAlpha.400"} borderRadius="3px" py="1rem" my="1rem" width={"95%"} justifyContent="center">
    <ProfilePage id={id}/>
    </Flex>
    </Flex>
  )
}
