import * as React from 'react';
import { Flex,Box,Text,Button, } from '@chakra-ui/react';
import Link from 'next/link';

const Navbar =() =>{    
    return(
        <Flex bgColor={"white"} width={"100vw"} padding={"20px"} height={"fit-content"} justifyContent={"space-between"} borderBottomColor={"cyan.500"} borderBottomWidth={"2px"} >
            <Flex bgColor={"white"} width={"25%"}>
                <Link href='/' ><img src='https://svgshare.com/i/i6p.svg' width={"150px"} /></Link>
            </Flex>
            <Flex px={"10px"} alignItems={"center"} justifyContent={"space-between"} bgColor={"white"} width={"50%"} >
                <Link href='/Customer' ><Button variant={"ghost"} colorScheme={"whiteAlpha"} color={"black"}>For Customers</Button></Link>
                <Link href='./Business' ><Button variant={"ghost"} colorScheme={"whiteAlpha"} color={"black"}>For Businesses</Button></Link>
                <Button variant={"ghost"} colorScheme={"whiteAlpha"} color={"black"}>See Whitepaper</Button>
            </Flex>
            <Flex justifyContent={"end"} px={"20px"} width={"25%"}>
                <Link href='./components/ContactUs' ><Button variant={"solid"} colorScheme={"cyan"} color={"white"} >Join Waitlist</Button></Link>
            </Flex>
        </Flex>
    )
}

export default Navbar