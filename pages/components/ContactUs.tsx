import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Text,Input, Button, Flex, Box, Divider } from '@chakra-ui/react';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zexdado', 'template_8q94tnl', form.current, 'uCXyLxudrrEnzzx90')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
      <Flex width={"100vw"} height={"100vh"} justifyContent={"center"} alignItems={"center"} >
          <Box  borderWidth={"2px"} padding={"40px"} rounded={"2xl"} borderColor={"#1dbcbc"} >
            <Text textAlign={"center"} fontWeight={"bold"} mb={"20px"}>Join Waitlist</Text>
            <form ref={form} onSubmit={sendEmail}>
            <Text>Name</Text>
            <input className='inputbox' type="text" name="user_name" />
            <Text>Email</Text>
            <input className='inputbox' type="email" name="user_email" />
            <Text></Text>
            <Button mt={"10px"}>
                <input  type="submit" value="Count Me In !!!" />
            </Button>
            </form>
          </Box>
      </Flex>
  );
};

export default ContactUs