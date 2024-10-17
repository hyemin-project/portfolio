import { Flex, Text, useMediaQuery, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';

const MotionFlex = motion(Flex);

const Skills = React.forwardRef((props, ref) => {
    const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
    const [hasAnimated, setHasAnimated] = useState(false);
    const skillSectionRef = useRef(null);  // Reference to the skills section

    const array = [
        { id: 1, text: 'Java', level: 85 },
        { id: 2, text: 'PHP', level: 60 },
        { id: 3, text: 'JavaScript', level: 80 },
        { id: 4, text: 'jQuery', level: 60 },
        { id: 5, text: 'React', level: 75 },
        { id: 6, text: 'Oracle', level: 70 },
        { id: 7, text: 'PostgreSQL', level: 65 },
        { id: 8, text: 'GitHub', level: 90 },
        { id: 9, text: 'Jenkins', level: 75 },
        { id: 10, text: 'SAP', level: 70 },
        { id: 11, text: 'Angular', level: 65 },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setHasAnimated(true);
                        observer.disconnect();  // Stop observing once the animation starts
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (skillSectionRef.current) {
            observer.observe(skillSectionRef.current);  // Start observing the skills section
        }

        return () => {
            if (skillSectionRef.current) {
                observer.unobserve(skillSectionRef.current);  // Clean up the observer
            }
        };
    }, []);

    return (
        <Flex
            ref={ref}
            width="full"
            minH={'100vh'}
            alignItems="center"
            py="26"
            justifyContent="center"
            flexDirection='column'
            px={isLargerThanLG ? '16' : '6'}
        >
        
            <Heading
                fontSize={isLargerThanLG ? '6xl' : '5xl'}
                fontWeight="bold"
                color="teal.600"
                mb="8"
            >
                Skills
            </Heading>
            <Flex
                ref={skillSectionRef}  // Set the ref to be observed
                minH="70vh"
                alignItems="center"
                justifyContent="flex-start"
                w="full"
                py="26"
                px={isLargerThanLG ? '16' : '6'}
                flexWrap="wrap"
                flexDirection="column"
                gap="20px"
            >
                {array.map((arr) => (
                    <Flex
                        key={arr.id}
                        width="100%"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        {/* Left side text */}
                        <Flex width="150px" justifyContent="flex-start">
                            <Text fontSize={isLargerThanLG ? '2xl' : 'xl'} fontWeight="bold">
                                {arr.text}
                            </Text>
                        </Flex>
                        
                        {/* Progress bar */}
                        <Flex
                            flex="1"
                            ml="4"
                            height="30px"
                            bg="gray.200"
                            borderRadius="full"
                            position="relative"
                            boxShadow="lg"
                        >
                            <MotionFlex
                                bgGradient="linear(to-r, teal.200, teal.400)"
                                borderRadius="full"
                                initial={{ width: 0 }}
                                animate={hasAnimated ? { width: `${arr.level}%` } : { width: 0 }}
                                transition={{ duration: 1.5 }}
                                alignItems="center"
                                justifyContent="flex-end"
                                color="gray.60"
                                fontWeight="bold"
                                position="relative"
                                pr="10px"
                            >
                                <Text position="absolute" right="10px" color="black">
                                    {`${arr.level} %`}
                                </Text>
                            </MotionFlex>
                        </Flex>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
});

export default Skills;
