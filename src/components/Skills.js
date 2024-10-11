import { Flex, Spacer, Text, useMediaQuery, Image ,} from '@chakra-ui/react';
import React from 'react';

const Skills = React.forwardRef((props, ref) => {
    const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
    const array = [
        {
            id: 1,
            text: 'Java with Spring boot',
            imageSrc: '/assets/images/spring.png',
        },
        {
            id: 2,
            text: 'JavaScript',
            imageSrc: '/assets/images/javascript.png',
        },
        {
            id: 3,
            text: 'Jquery',
            imageSrc: '/assets/images/jquery.png',
        },
        {
            id: 4,
            text: 'React',
            imageSrc: '/assets/images/react.png',
        },
        {
            id: 5,
            text: 'Oracle',
            imageSrc: '/assets/images/oracle.png',
        },
        {
            id: 6,
            text: 'PostgreSQL',
            imageSrc: '/assets/images/postgresql.png',
        },
        {
            id: 7,
            text: 'Jenkins',
            imageSrc: '/assets/images/jenkins.png',
        },
        {
            id: 8,
            text: 'GitHub',
            imageSrc: '/assets/images/github.png',
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
            flexDirection='column'
            px={isLargerThanLG ? '16' : '6'}
        >
        <Flex
                w='80%'
                flexDirection="column"
                ml={isLargerThanLG ? '7' : '0'}
            >
                <Text fontSize={isLargerThanLG ? '7xl' : '6xl'} fontWeight="bold">
                    Skills
                </Text>
            </Flex>
        <Flex
            minH="70vh"
            alignItems="center"
            justifyContent="space-between"
            w="full"
            py="26"
            px={isLargerThanLG ? '16' : '6'}
            flexWrap="wrap"
            flexDirection={isLargerThanLG ? 'row' : 'column'}
        >
            
            {array.map((arr) => (
                <>
                    <Flex
                        height="300px"
                        bg="blackAlpha.200"
                        width={isLargerThanLG ? '24%' : 'full'}
                        shadow="md"
                        p="6"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="md"
                        flexDirection="column"
                        textAlign="center"
                        mb={isLargerThanLG ? '0' : '4'}
                        border="1px solid #C4DDFF"
                    >
                        <Image src={arr.imageSrc} boxSize={12} mb="5"  _dark={{ filter: 'invert(1)' }}/>
                        <Text fontSize={isLargerThanLG ? '2xl' : '3xl'}>{arr.text}</Text>
                    </Flex>

                    <Spacer />
                </>
            ))}
        </Flex>
        </Flex>
    );
});

export default Skills;