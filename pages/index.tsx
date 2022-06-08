import { Button, ButtonGroup, Flex, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Flex width={"100vw"} height={"100vh"} > 
        <Flex flexDirection={"column"} width={"50%"} padding={"80px"} >
          <Text fontSize={"7xl"} className='heading' >
            Bring web3 <br/> payments to <br/> your products
          </Text>
          <button className='getstarted' >Join Waitlist</button>
          <Text mt={"40px"} >Till then go through services we're going to offer</Text>
          <Flex flexDirection={"row"} > 
          <ButtonGroup spacing={"30px"} mt={"20px"} > 
              <Button variant={"outline"} colorScheme={"black"}>For Businesses</Button>
              <Button variant={"outline"} colorScheme={"black"}>For Customers</Button>
          </ButtonGroup>
          </Flex>
        </Flex>
        <Flex>
          <img src='https://svgshare.com/i/i6a.svg' width={"600px"} />
        </Flex>
    </Flex>
  )
}

export default Home
