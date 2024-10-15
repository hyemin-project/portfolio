// import Head from 'next/head';
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
} from '@chakra-ui/react';

export default function Title({contactRef}) {

    const handleDownload = () => {
        const url = '/assets/file/Hyemin_Web Developer.pdf'; 
        fetch(url)
          .then((response) => response.blob())
          .then((blob) => {
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement("a");
            link.href = url;
            link.download = "Hyemin_Web Developer.pdf";
            document.body.appendChild(link);
    
            link.click();
    
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
          })
          .catch((error) => {
            console.error("Error fetching the file:", error);
          });
      };
      
    const handleScroll = () => {
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
    };



    return (
    // <Flex
    //     minH={'100vh'}
    //     align={'center'}
    //     justify={'center'}
    //     >
            <Container maxW={'3xl'} minH={'100vh'}>
                <Stack
                    as={Box}
                    textAlign={'center'}
                    align={'center'}
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 20, md: 36 }}>
                    <Text as={'span'} fontSize='2xl' color={'gray.500'}>
                        Hi there I'm Hyemin Jang
                    </Text>
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '5xl', sm: '6xl', md: '8xl' }}
                        lineHeight={'110%'}>
                        A passionate <br />
                        <Text as={'span'} color={'teal.400'}>
                            Web Developer
                        </Text>
                    </Heading>
                    <Text color={'gray.500'}>
                        A results-driven web developer with 2.5+ years of experience leading diverse projects, from prototype development to providing technical support. Skilled in designing and implementing core system architectures, optimizing operational efficiency, and ensuring seamless functionality across web systems.
                    </Text>
                    <Stack spacing={6} direction={'row'}>
                        <Button
                            rounded={'full'}
                            px={6}
                            colorScheme={'teal'}
                            bg={'teal.400'}
                            _hover={{ bg: 'teal.500' }}
                            onClick={handleDownload}>
                            Download CV
                        </Button>
                        <Button rounded={'full'} px={6} onClick={handleScroll}>
                            Contact Me
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        // </Flex>
    );
}
