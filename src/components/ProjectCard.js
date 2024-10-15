import React, { useState } from 'react';
import { Box, Flex, Text, Image, Button } from '@chakra-ui/react';

const ProjectCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped); // Toggle flip state for individual card
  };

  return (
    <Box
      width="24%"
      height="300px"
      perspective="1000px"
      mb="4"
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
        transition="transform 0.6s ease-in-out"
      >
        {/* Front side of the card */}
        <Box
          height="100%"
          width="100%"
          position="absolute"
          style={{ backfaceVisibility: 'hidden' }}
          borderRadius="md"
          shadow="md"
          overflow="hidden"
        >
          <Image
            src={project.image}
            alt={project.title}
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </Box>

        {/* Back side of the card */}
        <Box
          bg="rgba(0, 0, 0, 0.9)"  // Dark background to cover front side
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
          shadow="md"
          p="4"
        >
          {/* Completely cover the front image with a dark background */}
          <Box position="absolute" top="0" left="0" width="100%" height="100%" zIndex="1">
            <Box
              bg="rgba(0, 0, 0, 0.9)"  // Completely dark background to hide the front image
              width="100%"
              height="100%"
              position="absolute"
              borderRadius="md"
            />
          </Box>

          {/* Back side content */}
          <Box zIndex="2" position="relative" textAlign="center">
            <Text fontSize="lg" fontWeight="bold" color="white" mb="4">{project.title}</Text>
            <Text fontSize="md" color="white" mb="4">{project.description}</Text>
            <Button colorScheme="teal" onClick={() => window.open(project.demo)}>Demo</Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProjectCard;
