import React from 'react';
import { Box, Heading, Container, Text, Button, Stack, IconButton, HStack } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

export default function Title({ contactRef }) {
  const handleDownload = () => {
    const url = '/assets/file/Hyemin_Web Developer.pdf';
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Hyemin_Web Developer.pdf';
        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error('Error fetching the file:', error);
      });
  };

  const handleScroll = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container
      maxW={'3xl'}
      minH={'90vh'}
      display='flex'
      flexDirection='column'
      justifyContent='center'
      position='relative'
    >
      <Stack
        as={Box}
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 10, md: 20 }}
        zIndex={2}
      >
        <Text as={'span'} fontSize='2xl' color={'gray.500'}>
          Hi there I'm Hyemin Jang
        </Text>
        <Heading
          fontWeight={600}
          fontSize={{ base: '5xl', sm: '6xl', md: '8xl' }}
          lineHeight={'110%'}
        >
          <Typewriter
            options={{
              strings: ['A passionate', 'Web Developer'],
              autoStart: true,
              loop: true,
            }}
          />
        </Heading>
        <Text color={'gray.500'}>
          A results-driven web developer with 2.5+ years of experience leading diverse projects, from prototype development to providing technical support. Skilled in designing and implementing core system architectures, optimizing operational efficiency, and ensuring seamless functionality across web systems.
        </Text>
        <Stack spacing={6} direction={'row'}>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'teal'}
              bg={'teal.400'}
              _hover={{ bg: 'teal.500' }}
              onClick={handleDownload}
            >
              Download CV
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Button rounded={'full'} px={6} onClick={handleScroll}>
              Contact Me
            </Button>
          </motion.div>
        </Stack>
        <HStack spacing={6} mt={6}>
          <IconButton
            as='a'
            href='https://github.com/hyemin-project'
            target='_blank'
            aria-label='GitHub'
            icon={<FaGithub />}
            size='lg'
            variant='outline'
            colorScheme='teal'
            _hover={{ bg: 'teal.500', color: 'white' }}
          />
          <IconButton
            as='a'
            href='https://linkedin.com/in/hyemin-jang-2070aa204'
            target='_blank'
            aria-label='LinkedIn'
            icon={<FaLinkedin />}
            size='lg'
            variant='outline'
            colorScheme='teal'
            _hover={{ bg: 'teal.500', color: 'white' }}
          />
        </HStack>
      </Stack>
    </Container>
  );
}
