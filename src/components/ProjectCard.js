import React, { useState } from 'react';
import { Box, Flex, Text, Image, Button, Tag, VStack, Link, Tooltip, Icon } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { FaReact, FaNodeJs, FaAws } from 'react-icons/fa'; // Example icons for tech stack

const ProjectCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped); // Toggle flip state for individual card
  };

  return (
    <Box
      width={{ base: '100%', md: '48%', lg: '30%' }}
      height="350px"
      perspective="1500px" // Enhanced perspective for a more dramatic 3D effect
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
        transition="transform 0.8s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s ease-in-out" // Smoother animation
        boxShadow={isFlipped ? '10px 10px 30px rgba(0, 0, 0, 0.5)' : '5px 5px 15px rgba(0, 0, 0, 0.3)'} // Dynamic shadow
      >
        {/* Front side of the card */}
        <Box
          height="100%"
          width="100%"
          position="absolute"
          style={{ backfaceVisibility: 'hidden' }}
          borderRadius="md"
          shadow="lg" // Enhanced shadow for better visual depth
          overflow="hidden"
        >
          <Image
            src={project.image}
            alt={project.title}
            width="100%"
            height="100%"
            objectFit="cover"
            transition="transform 0.4s ease-in-out" // Image zoom effect on hover
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
          bgGradient="linear(to-b, blackAlpha.800, blackAlpha.900)" // Gradient for a more sophisticated look
        >
          {/* Back side content */}
          <Box zIndex="2" position="relative" textAlign="center">
            <Text fontSize="lg" fontWeight="bold" color="teal.200" mb="2">{project.title}</Text>
            <Text fontSize="md" color="gray.300" mb="4">{project.description}</Text>
            {/* Technology Stack */}
            <VStack spacing={2} mb="4">
              <Tooltip label="React" aria-label="React Tooltip">
                <Icon as={FaReact} boxSize={6} color="teal.200" />
              </Tooltip>
              <Tooltip label="Node.js" aria-label="Node.js Tooltip">
                <Icon as={FaNodeJs} boxSize={6} color="teal.200" />
              </Tooltip>
              <Tooltip label="AWS" aria-label="AWS Tooltip">
                <Icon as={FaAws} boxSize={6} color="teal.200" />
              </Tooltip>
            </VStack>
            <Button colorScheme="teal" onClick={() => window.open(project.demo)} _hover={{ transform: 'scale(1.1)' }} mb="2">
              Demo
            </Button>
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