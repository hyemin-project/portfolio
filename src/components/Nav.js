import React, { useState, useRef  } from 'react';
import {
    Text,
    Flex,
    Spacer,
    IconButton,
    Button,
    useColorMode,
    useColorModeValue,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Nav = ({ experienceRef, skillsRef, contactRef }) => {
    const [scroll, setScroll] = useState(false);
    const { colorMode, toggleColorMode } = useColorMode();
    const navBg = useColorModeValue('white', 'blackAlpha.800');


    const changeScroll = () =>
        document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
            ? setScroll(true)
            : setScroll(false);

    const scrollToRef = (ref) => {
        console.log(ref.current);
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    window.addEventListener('scroll', changeScroll);

    return (
        <Flex
            h="10vh"
            alignItems="center"
            p="6"
            boxShadow={scroll ? 'base' : 'none'}
            position="sticky"
            top="0"
            zIndex="sticky"
            w="full"
            bg={navBg}
        >
            <Menu>
                <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                    <Text fontSize="xl" fontWeight="bold">
                        Navigation
                    </Text>
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={() => scrollToRef(experienceRef)}>Experience</MenuItem>
                    <MenuItem onClick={() => scrollToRef(skillsRef)}>Skills</MenuItem>
                    <MenuItem onClick={() => scrollToRef(contactRef)}>Contact Me</MenuItem>
                </MenuList>

            </Menu>

            <Spacer />

            <Flex alignItems="center">
                <IconButton mr="10" w={6} h={6} p={5} onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </IconButton>
            </Flex>

        </Flex>
    );
};

export default Nav;