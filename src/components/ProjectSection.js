import React from 'react';
import { Flex, Heading, useMediaQuery } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';  // Import the ProjectCard component

const ProjectSection = React.forwardRef((props, ref) => {
  const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');

  // Project data with techStack included
  const projects = [
    {
      title: 'Yoga Website',
      description: 'Designed a static frontend website for a yoga studio using React.',
      demo: 'https://co-op-yoga-website.vercel.app/',
      image: '/assets/images/yoga.png',
      techStack: ['React'],
      repo: 'https://github.com/JPBM135/co-op-yoga-website.git'
    },
    {
      title: 'Cloud Blog',
      description: 'Developed a serverless-style blog platform with real-time commenting. Backend API for CRUD operations and analytics.',
      demo: '#',
      image: '/assets/images/cloudBlog.png',
      techStack: ['React', 'Node.js'],
      repo:'https://github.com/hyemin-project/cloudblog.git'
    },
    {
      title: 'Portfolio',
      description: 'Redesigned and optimized portfolio using Chakra UI and React for a modern user interface.',
      demo: '#',
      image: '/assets/images/portfolio.png',
      techStack: ['React', 'Chakra UI'],
      repo:'https://github.com/hyemin-project/portfolio.git'
    },
    {
      title: 'Homestay Webpage',
      description: 'Built a homestay webpage with functionalities similar to Agoda using React and Local Storage.',
      demo: '#',
      image: '/assets/images/homestay.png',
      techStack: ['React', 'LocalStorage'],
      repo:'https://github.com/hyemin-project/booking-homestay-web.git'
    },
    {
      title: 'Tag Cloud Generator',
      description: 'Created a React-based app for generating random tag clouds from user input, with backend API.',
      demo: '#',
      image: '/assets/images/tagCloud.png',
      techStack: ['React', 'Node.js', 'PostgreSQL'],
    },
    {
      title: 'Decision Maker',
      description: 'Created a web app for decision-making using a customizable spinning wheel with probabilities.',
      demo: 'https://hyemin-project.github.io/coffee/',
      image: '/assets/images/decisionMaker.png',
      techStack: ['Vue.js', 'Node.js', 'PostgreSQL'],
    },
    {
      title: 'Cafe Website',
      description: 'Developed a cafe-themed website for showcasing products and services.',
      demo: 'https://hyemin-project.github.io/coffee/',
      image: '/assets/images/cafe.png',
      techStack: ['HTML5', 'CSS'],
    },
  ];

  return (
    <Flex
      ref={ref}
      width="full"
      minH={'100vh'}
      alignItems="center"
      py="26"
      justifyContent="center"
      flexDirection="column"
      px={isLargerThanLG ? '16' : '6'}
    >
      <Heading
        fontSize={isLargerThanLG ? '6xl' : '5xl'}
        fontWeight="bold"
        color="teal.600"
        mb="8"
      >
        Projects
      </Heading>
      <Flex
        minH="70vh"
        alignItems="center"
        justifyContent="space-between"
        w="full"
        py="26"
        px={isLargerThanLG ? '16' : '6'}
        flexWrap="wrap"
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </Flex>
    </Flex>
  );
});

export default ProjectSection;
