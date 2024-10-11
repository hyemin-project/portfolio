import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Title from './components/Title'
import Nav from './components/Nav'
import Contents from './components/Contents'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function App() {
  const contactRef = React.useRef(null);
  const experienceRef = React.useRef(null);
  const skillsRef = React.useRef(null);

  return (
    <ChakraProvider>
      <Nav contactRef={contactRef} experienceRef={experienceRef} skillsRef={skillsRef} />
      <Title contactRef={contactRef} />
      <Experience ref={experienceRef} />
      <Skills ref={skillsRef} />
      <Contents />
      <Contact ref={contactRef} />
    </ChakraProvider>
  );
}