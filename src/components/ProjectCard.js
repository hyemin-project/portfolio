import React, { useState } from 'react';
import { Box, Flex, Text, Image, Button, VStack, Tooltip, Icon } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { FaReact, FaNodeJs, FaAws, FaDatabase, FaHtml5, FaCss3Alt, FaVuejs } from 'react-icons/fa';
import { SiChakraui, SiPostgresql } from 'react-icons/si';

const ProjectCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped); // Toggle flip state for individual card
  };

  return (
    <Box
      width={{ base: '100%', md: '48%', lg: '30%' }}
      height="350px"
      perspective="1500px"
      mb="6"
      onMouseEnter={handleFlip}
      onMouseLeave={handleFlip}
      cursor="pointer"
    >
      <Flex
        position="relative"
        width="100%"
        height="100%"
        transform={isFlipped ? 'rotateY(180deg)' : 'rotateY(0)'}
        style={{ transformStyle: 'preserve-3d' }}
        transition="transform 0.8s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s ease-in-out"
        boxShadow={isFlipped ? '10px 10px 30px rgba(0, 0, 0, 0.5)' : '5px 5px 15px rgba(0, 0, 0, 0.3)'}
      >
        {/* Front side of the card */}
        <Box
          height="100%"
          width="100%"
          position="absolute"
          style={{ backfaceVisibility: 'hidden' }}
          borderRadius="md"
          shadow="lg"
          overflow="hidden"
        >
          <Image
            src={project.image}
            alt={project.title}
            width="100%"
            height="100%"
            objectFit="cover"
            transition="transform 0.4s ease-in-out"
            transform={isFlipped ? 'scale(1.05)' : 'scale(1)'}
          />
        </Box>

        {/* Back side of the card */}
        <Box
          height="100%"
          width="100%"
          position="absolute"
          transform="rotateY(180deg)"
          style={{ backfaceVisibility: 'hidden' }}
          borderRadius="md"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          shadow="lg"
          p="4"
          bgGradient="linear(to-b, blackAlpha.800, blackAlpha.900)"
        >
          <Box zIndex="2" position="relative" textAlign="center">
            <Text fontSize="lg" fontWeight="bold" color="teal.200" mb="2">{project.title}</Text>
            <Text fontSize="md" color="gray.300" mb="4">{project.description}</Text>
            {/* Technology Stack */}
            <VStack spacing={2} mb="4">
              {project.techStack.includes('React') && (
                <Tooltip label="React" aria-label="React Tooltip">
                  <Icon as={FaReact} boxSize={6} color="teal.200" />
                </Tooltip>
              )}
              {project.techStack.includes('Node.js') && (
                <Tooltip label="Node.js" aria-label="Node.js Tooltip">
                  <Icon as={FaNodeJs} boxSize={6} color="teal.200" />
                </Tooltip>
              )}
              {project.techStack.includes('PostgreSQL') && (
                <Tooltip label="PostgreSQL" aria-label="PostgreSQL Tooltip">
                  <Icon as={SiPostgresql} boxSize={6} color="teal.200" />
                </Tooltip>
              )}
              {project.techStack.includes('AWS') && (
                <Tooltip label="AWS" aria-label="AWS Tooltip">
                  <Icon as={FaAws} boxSize={6} color="teal.200" />
                </Tooltip>
              )}
              {project.techStack.includes('Chakra UI') && (
                <Tooltip label="Chakra UI" aria-label="Chakra UI Tooltip">
                  <Icon as={SiChakraui} boxSize={6} color="teal.200" />
                </Tooltip>
              )}
              {project.techStack.includes('HTML5') && (
                <Tooltip label="HTML5" aria-label="HTML5 Tooltip">
                  <Icon as={FaHtml5} boxSize={6} color="teal.200" />
                </Tooltip>
              )}
              {project.techStack.includes('CSS') && (
                <Tooltip label="CSS" aria-label="CSS Tooltip">
                  <Icon as={FaCss3Alt} boxSize={6} color="teal.200" />
                </Tooltip>
              )}
              {project.techStack.includes('Vue.js') && (
                <Tooltip label="Vue.js" aria-label="Vue.js Tooltip">
                  <Icon as={FaVuejs} boxSize={6} color="teal.200" />
                </Tooltip>
              )}
              {/* Use FaDatabase as a placeholder for LocalStorage */}
              {project.techStack.includes('LocalStorage') && (
                <Tooltip label="LocalStorage" aria-label="LocalStorage Tooltip">
                  <Icon as={FaDatabase} boxSize={6} color="teal.200" />
                </Tooltip>
              )}
            </VStack>
            {/* <Button colorScheme="teal" onClick={() => window.open(project.demo)} _hover={{ transform: 'scale(1.1)' }} mb="2">
              Demo
            </Button> */}
            <Button variant="outline" colorScheme="teal" onClick={() => window.open(project.repo)} _hover={{ transform: 'scale(1.1)' }}>
              View Code <ExternalLinkIcon mx="2px" />
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProjectCard;
