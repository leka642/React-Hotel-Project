import React, { useState } from 'react';
import {Box,Flex,HStack,Link,IconButton,useDisclosure,Stack,Image,} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as ReactRouterLink } from 'react-router-dom'; // If you're using React Router

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Rooms', href: '/rooms' },
    { label: 'Concact us', href: '/contact' },
  ];

  return (
    <Box bg={'#80BCAC '} boxShadow={'sm'} px={{ base: 4, md: 8 }} py={4} >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Box>
          <Image src='https://static.vecteezy.com/system/resources/previews/007/497/955/original/letter-l-logo-design-free-vector.jpg' w={20} borderRadius='50%' shadow='2px 2px 5px aqua'/>
        </Box>
        
        <Flex alignItems={'center'}>
          <HStack
            as={'nav'}
            spacing={8}
            mr={{ base: -2, md: 0 }}
            display={{ base: 'none', md: 'flex' }} // Hide on mobile, show on desktop
          >
            
            {navItems.map((item) => (
              <Link
                key={item.label}
                as={ReactRouterLink} // Use ReactRouterLink if you're using React Router
                to={item.href}
                fontWeight={500}
                color={'white'}
                _hover={{
                  textDecoration: 'none',
                  color: 'aqua',
                }}
              >
                {item.label}
              </Link>
               
            ))}
           
          </HStack>
          
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }} // Show only on mobile
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} mt={10}  display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {navItems.map((item) => (
              <Link
                key={item.label}
                as={ReactRouterLink} // Use ReactRouterLink if you're using React Router
                to={item.href}
                fontWeight={500}
                color={'white'}
                _hover={{
                  textDecoration: 'none',
                  color: 'aqua',
                }}
              >
                {item.label}
              </Link>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default NavBar;