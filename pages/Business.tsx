import { Divider, Flex, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import Link from 'next/link';
import * as React from 'react';

const Business: NextPage = () => {
    return(
        <Flex flexDirection={"column"} width={'100vw'} >
            <Flex>
                <Flex width={"60%"} padding={"60px"} >
                    <Text fontSize={"5xl"} ><label className='heading' >Empower you Business by integrating the most flexible <span className='bgtext' > Crypto Payments Platform </span></label></Text>
                </Flex>
                <Flex>
                    
                </Flex>
            </Flex>
            <Flex mt={"30px"}> 
                <Flex width={"50%"} padding={"60px"} >
                </Flex>
                <Flex width={"50%"} flexDirection={'column'} >                    
                    <Text fontSize={"4xl"} ><label className='heading' ><span className='cyantext' > Generate custom payment pages for your business</span></label></Text>
                    <Divider/>
                    <Text fontSize={"3xl"} ><label className='body' >Add Details. Share Links. Get Payments.</label></Text>
                    <Text fontSize={"3xl"} ><label className='body' >Bunch of add-ons to choose from <br/>NFT Tickets, Subscriptions, Streams ...</label></Text>
                </Flex>
            </Flex>


            <Flex mt={"30px"} padding={"40px"}> 
                <Flex width={"50%"} flexDirection={'column'} >                    
                    <Text fontSize={"4xl"} ><label className='heading' ><span className='cyantext' >Launch OnChain Loyalty Programs</span></label></Text>
                    <Divider/>
                    <Text fontSize={"3xl"} ><label className='body' >Track purchases and reward your customers</label></Text>
                    <Text fontSize={"3xl"} ><label className='body' >Generate random NFT Coupons<br/>OnChain Credit points <br/>Or start off with simple Buy 10 Get 1 free </label></Text>
                </Flex>
                <Flex width={"50%"} padding={"60px"} >
                </Flex>
            </Flex>


            <Flex mt={"30px"}> 
                <Flex width={"50%"} padding={"60px"} >
                </Flex>
                <Flex width={"50%"} flexDirection={'column'} padding={"60px"} >                    
                    <Text fontSize={"4xl"} ><label className='heading' ><span className='cyantext' >Get paid in the Crypto you want</span></label></Text>
                    <Divider/>
                    <Text fontSize={"3xl"} ><label className='body' >Set your preferred token</label></Text>
                    <Text fontSize={"3xl"} ><label className='body' >Nexyos will swap the customer&apos;s tokens for you, <br/> as per your convinience</label></Text>
                </Flex>
            </Flex>
            <Flex  flex={'1'} width={"100vw"} justifyContent={'center'} textAlign={"center"} padding={"30px"} >
                <Link href='/Customer' ><Text>Check what we have for customers</Text></Link>
            </Flex>
        </Flex>
    )
}

export default Business