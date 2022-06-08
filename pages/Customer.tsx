import * as React from 'react';
import { Flex,Box,Text } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';

const Customer =()=>{
    return(
        <Flex flexDirection={"column"} width={'100vw'} >
        <Flex>
            <Flex width={"60%"} padding={"60px"} >
                <Text fontSize={"5xl"} ><label className='heading' >The most Flexible and Powerful <span className='bgtext' > Crypto Payments Gateway </span><br/> you will ever use</label></Text>
            </Flex>
            <Flex>
                
            </Flex>
        </Flex>
        <Flex mt={"30px"}> 
            <Flex width={"50%"} padding={"60px"} >
            </Flex>
            <Flex width={"50%"} flexDirection={'column'} >                    
                <Text fontSize={"4xl"} ><label className='heading' ><span className='cyantext' >Stream your payment over months</span></label></Text>
                <Divider/>
                <Text fontSize={"3xl"} ><label className='body' >Pay a tiny slice every second</label></Text>
                <Text fontSize={"3xl"} ><label className='body' >Powered by Superfluid, gives you the power to manage your streams,<br/> whenever you want</label></Text>
            </Flex>
        </Flex>


        <Flex mt={"30px"} padding={"40px"}> 
            <Flex width={"50%"} flexDirection={'column'} >                    
                <Text fontSize={"4xl"} ><label className='heading' ><span className='cyantext' >Pay on your profits</span></label></Text>
                <Divider/>
                <Text fontSize={"3xl"} ><label className='body' >Bull Market? Lock your assets</label></Text>
                <Text fontSize={"3xl"} ><label className='body' >Amount is paid from the profit made by your assets, once paid get back your locked asset.<br/>Swap for other tokens if they perform well.<br/>All under one platform.</label></Text>
            </Flex>
            <Flex width={"50%"} padding={"60px"} >
            </Flex>
        </Flex>


        <Flex mt={"30px"}> 
            <Flex width={"50%"} padding={"60px"} >
            </Flex>
            <Flex width={"50%"} flexDirection={'column'} padding={"60px"} >                    
                <Text fontSize={"4xl"} ><label className='heading' ><span className='cyantext' >Build up OnChain Credit Score</span></label></Text>
                <Divider/>
                <Text fontSize={"3xl"} ><label className='body' >Make more secure payments</label></Text>
                <Text fontSize={"3xl"} ><label className='body' >Build up your credits. Enjoy perks from partners,<br/>and also from us<br/>Unlock larger purchase amounts, loans...</label></Text>
            </Flex>
        </Flex>
        <Flex  flex={'1'} width={"100vw"} justifyContent={'center'} textAlign={"center"} padding={"30px"} >
            <a href='/Customer' ><Text>Check what we have for customers</Text></a>
        </Flex>
    </Flex>
    )
}   

export default Customer;