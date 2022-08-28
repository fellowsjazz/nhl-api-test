import '../styles/globals.css'
import '../components/TopBar'
import TopBar from '../components/TopBar'
import {ChakraProvider} from '@chakra-ui/react'
import {Box} from "@chakra-ui/react"

function MyApp({ Component, pageProps }) {
  return (
  <ChakraProvider>
  <Box w={"100vw"} h={'100%'} bgGradient="radial(gray.300, blue.400)" style={{padding: '1rem'}}>
  <TopBar/>
  <Component {...pageProps} />
  </Box>
  </ChakraProvider>
  )
}

export default MyApp
