import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useMediaQuery,
    Textarea,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const Contact = React.forwardRef((props, ref) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            name,
            email,
            message,
            timestamp: new Date().toISOString()
        };

        localStorage.setItem('contactData', JSON.stringify(data));
        setIsVisible(true);

        setTimeout(() => {
            setIsVisible(false);
        }, 5000); //after 5sec 
    };


    const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
    return (
        <Flex
            ref={ref}
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW='800' py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={isLargerThanLG ? '7xl' : '6xl'}>Contact Me</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        <Link color={'teal.400'}>Feel free</Link> to contact me  ✌️
                    </Text>
                </Stack>
                {isVisible && (
                    <Alert status='success'>
                        <AlertIcon />
                        <AlertTitle>Message sent!</AlertTitle>
                        <AlertDescription>Thank you for contacting me. I'll get back to you soon.</AlertDescription>
                    </Alert>
                )}
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="name">
                            <FormLabel>Name</FormLabel>
                            <Input type="text" placeholder='Hyemin Jang' value={name} onChange={(e) => setName(e.target.value)} />
                        </FormControl>
                        <FormControl id="email">
                            <FormLabel>Email</FormLabel>
                            <Input type="email" placeholder='email@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </FormControl>
                        <FormControl id="message">
                            <FormLabel>Message</FormLabel>
                            <Textarea placeholder='Type your message here.' value={message} onChange={(e) => setMessage(e.target.value)} />
                        </FormControl>
                        <Stack spacing={10}>
                            <Button
                                bg={'teal.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'teal.500',
                                }} onClick={handleSubmit}>
                                Submit
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
});

export default Contact;