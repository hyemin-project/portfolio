import {
  Flex,
  Spacer,
  Text,
  useMediaQuery,
  ListItem,
  Highlight,
  UnorderedList,
  useColorModeValue,
  Link,
  Heading,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import React from 'react';

const Experience = React.forwardRef((props, ref) => {
  const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');

  return (
    <Flex
      ref={ref}
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      py="12"
    >
      <Flex
        width="full"
        alignItems="center"
        px={isLargerThanLG ? '16' : '6'}
        py="12"
        justifyContent="center"
        flexDirection='column'
      >
        {/* Section Heading */}
        <Flex
          w='80%'
          flexDirection="column"
          mb="10"
          textAlign="center"
        >
          <Heading
            fontSize={isLargerThanLG ? '6xl' : '5xl'}
            fontWeight="bold"
            color="teal.600"
            mb="8"
          >
            Experiences
          </Heading>
        </Flex>

        {/* DevOps Engineer Section */}
        <Flex flexDirection="column" px={isLargerThanLG ? '16' : '6'} width="full" mb="10">
          <Text mb="2" opacity="0.9" fontSize={isLargerThanLG ? '4xl' : '3xl'} fontWeight="bold">
            <Highlight query='Devops Engineer' styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}>
              Devops Engineer in
            </Highlight>
            <Link href='https://www.gsitm.com/?langCd=EN' isExternal color="teal.500">
              {' '} GSITM <ExternalLinkIcon mx='2px' />
            </Link>
          </Text>
          <Text mb="6" opacity="0.7" fontSize="lg" color={useColorModeValue('gray.600', 'gray.300')}>
            November 2022 - November 2023
          </Text>
          <UnorderedList spacing={3} fontSize="lg">
            <ListItem>
              Engineered two monitoring systems for ship systems using Java with Spring within a 2-month deadline, enhancing real-time oversight and operational efficiency.
            </ListItem>
            <ListItem>
              Seamlessly integrated SAP with the web system, improving data accuracy and operational efficiency by 20%, and streamlined data flow processes through interface development.
            </ListItem>
            <ListItem>
              Conducted regular audits and quality checks on web interfaces, resolving 95% of discrepancies to maintain optimal functionality and client satisfaction.
            </ListItem>
          </UnorderedList>
        </Flex>

        {/* Technical Consultant Section */}
        <Flex flexDirection="column" px={isLargerThanLG ? '16' : '6'} width="full">
          <Text mb="2" opacity="0.9" fontSize={isLargerThanLG ? '4xl' : '3xl'} fontWeight="bold">
            <Highlight query='Technical Consultant' styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}>
              Technical Consultant in
            </Highlight>
            <Link href='https://www.bimatrix.co.kr/' isExternal color="teal.500">
              {' '} Bimatrix <ExternalLinkIcon mx='2px' />
            </Link>
          </Text>
          <Text mb="6" opacity="0.7" fontSize="lg" color={useColorModeValue('gray.600', 'gray.300')}>
            November 2022 - November 2023
          </Text>
          <UnorderedList spacing={3} fontSize="lg" >
            <ListItem>
              Orchestrated presentations to communicate project progress and gather stakeholder feedback, fostering a collaborative team environment.
            </ListItem>
            <ListItem>
              Led multiple POC cycles per month, leveraging expertise in database architecture, requirement analysis, and screen design.
            </ListItem>
            <ListItem>
              Conducted in-depth analysis of screen processes and error codes, improving system performance by 20% and ensuring seamless solution upgrades.
            </ListItem>
          </UnorderedList>
        </Flex>
      </Flex>
    </Flex>
  );
});

export default Experience;
