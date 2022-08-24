import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box } from '@chakra-ui/react'


export default function Home() {
  return (
    <Box align={'center'} my="1rem" h={"100vh"}>
      This is the home page
    </Box>
  )
}
