import { Flex, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Flex width={"100vw"} height={"100vh"} > 
        <Flex width={"50%"} padding={"80px"} >
          <Text fontSize={"7xl"} >
            Bring web3 <br/> payments to <br/> your produts
          </Text>
        </Flex>
        <Flex>

        </Flex>
    </Flex>
  )
}

export default Home
