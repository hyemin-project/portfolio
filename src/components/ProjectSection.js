import React , { useRef } from 'react';
import { Flex, Text, useMediaQuery,Heading } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';  // Import the ProjectCard component

const ProjectSection = React.forwardRef((props, ref) => {

  const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');

  // Project data inside ProjectSection.js
  const projects = [
    {
      title: 'Yoga Website',
      description: '쿠팡 웹페이지의 오늘의 발견 영역을 마크업한 결과물입니다.',
      demo: 'https://co-op-yoga-website.vercel.app/', 
      image: '/assets/images/yoga.png', 
    },
    {
      title: 'Cloud Blog',
      description: '프로젝트 설명 2',
      demo: '#', 
      image: '/assets/images/cloudBlog.png',
    },
    {
      title: 'Project 8',
      description: '프로젝트 설명 8',
      demo: 'https://outdoor-gear-project.vercel.app/',
      image: '/assets/images/gearOutdoors.png',
    },
    
    {
      title: 'Portfolio',
      description: '프로젝트 설명 7',
      demo: '#',
      image: '/assets/images/portfolio.png',
    },
    {
      title: 'homestay',
      description: '프로젝트 설명 4',
      demo: '#',
      image: '/assets/images/homestay.png',
    },
    {
      title: 'tagCloud',
      description: '프로젝트 설명 3',
      demo: '#',
      image: '/assets/images/tagCloud.png',
    },
    {
      title: 'decisionMaker',
      description: '프로젝트 설명 5',
      demo: 'https://hyemin-project.github.io/coffee/',
      image: '/assets/images/decisionMaker.png',
    },
    {
      title: 'Cafe Website',
      description: '프로젝트 설명 6',
      demo: 'https://hyemin-project.github.io/coffee/',
      image: '/assets/images/coffee.png',
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
