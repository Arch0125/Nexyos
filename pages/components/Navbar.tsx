import * as React from 'react';
import { Flex,Box,Text,Button, Link } from '@chakra-ui/react';

const Navbar =() =>{    
    return(
        <Flex bgColor={"white"} width={"100vw"} padding={"20px"} height={"fit-content"} justifyContent={"space-between"} borderBottomColor={"cyan.500"} borderBottomWidth={"2px"} >
            <Flex bgColor={"white"} width={"25%"}>
                <a href='/' ><img src='https://svgshare.com/i/i6p.svg' width={"150px"} /></a>
            </Flex>
            <Flex px={"10px"} alignItems={"center"} justifyContent={"space-between"} bgColor={"white"} width={"50%"} >
                <a href='/Customer' ><Button variant={"ghost"} colorScheme={"whiteAlpha"} color={"black"}>For Customers</Button></a>
                <a href='./Business' ><Button variant={"ghost"} colorScheme={"whiteAlpha"} color={"black"}>For Businesses</Button></a>
                <Button variant={"ghost"} colorScheme={"whiteAlpha"} color={"black"}>See Whitepaper</Button>
            </Flex>
            <Flex justifyContent={"end"} px={"20px"} width={"25%"}>
                <Button variant={"solid"} colorScheme={"cyan"} color={"white"} >Join Waitlist</Button>
            </Flex>
        </Flex>
    )
}

export default Navbar