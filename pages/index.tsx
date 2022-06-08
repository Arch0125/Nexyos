import { Button, ButtonGroup, Flex, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Flex width={"100vw"} height={"100vh"} > 
        <Flex flexDirection={"column"} width={"50%"} padding={"80px"} >
          <Text fontSize={"7xl"} className='heading' >
            Bring <label className='cyantext' >web3</label> <br/> payments to <br/> your <span className='cyantext' >products</span>
          </Text>
          <Link href='./components/ContactUs' ><button className='getstarted' >Join Waitlist</button></Link>
        </Flex>
        <Flex>
          <img src='https://svgshare.com/i/i6a.svg' width={"600px"} />
        </Flex>
    </Flex>
  )
}

export default Home
