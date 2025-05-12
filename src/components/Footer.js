import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  VisuallyHidden,
  IconButton,
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box
      bg="gray.800"
      color="gray.400"
      py={8}
    >
      <Container maxW="container.xl">
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 6, md: 8 }}
          justifyContent="space-between"
          alignItems={{ base: 'center', md: 'flex-start' }}
        >
          <Stack spacing={4} align="center">
            <Text fontWeight="bold" fontSize="lg">
              Lucky Hotel
            </Text>
            <Text fontSize="sm" textAlign="center">
              Your gateway to comfort and unforgettable experiences in Salem.
            </Text>
          </Stack>

          <Stack direction={{ base: 'column', md: 'row' }} spacing={8}>
            <Stack spacing={4} align="flex-start">
              <Text fontWeight="semibold" color="gray.300">
                Explore
              </Text>
              <Link href="/rooms" color="gray.400" _hover={{ color: 'gray.200' }}>
                Rooms & Suites
              </Link>
              <Link href="/about" color="gray.400" _hover={{ color: 'gray.200' }}>
                Facilities
              </Link>
              <Link href="/contact" color="gray.400" _hover={{ color: 'gray.200' }}>
                Contact Us
              </Link>
            </Stack>

            <Stack spacing={4} align="flex-start">
              <Text fontWeight="semibold" color="gray.300">
                Visit Us
              </Text>
              <Text fontSize="sm">
                 Hotel Address,
                Salem, <br /> Tamil Nadu, India
              </Text>
              <Text fontSize="sm">
                Email: <Link href="mailto:info@luckyhotel.com" color="gray.400" _hover={{ color: 'gray.200' }}>info@luckyhotel.com</Link>
              </Text>
              <Text fontSize="sm">
                Phone: <Link href="tel:+91XXXXXXXXXX" color="gray.400" _hover={{ color: 'gray.200' }}>+91 XXXXXXXXXX</Link>
              </Text>
            </Stack>

            <Stack align="flex-start">
              <Text fontWeight="semibold" color="gray.300">
                Follow Us
              </Text>
              <Stack direction="row" spacing={4}>
                <a
                  href="https://www.facebook.com" // Replace with your Facebook page URL
                  isExternal
                  aria-label="Facebook"
                >
                  <IconButton
                    icon={<FaFacebook size="1.5em" />}
                    variant="ghost"
                    color="gray.400"
                    _hover={{ color: 'blue.500' }}
                  >
                    <VisuallyHidden>Facebook</VisuallyHidden>
                  </IconButton>
                </a>
                <a
                  href="https://www.instagram.com" // Replace with your Instagram profile URL
                  isExternal
                  aria-label="Instagram"
                >
                  <IconButton
                    icon={<FaInstagram size="1.5em" />}
                    variant="ghost"
                    color="gray.400"
                    _hover={{ color: 'purple.500' }}
                  >
                    <VisuallyHidden>Instagram</VisuallyHidden>
                  </IconButton>
                </a>
                <a
                  href="https://twitter.com" // Replace with your Twitter profile URL
                  isExternal
                  aria-label="Twitter"
                >
                  <IconButton
                    icon={<FaTwitter size="1.5em" />}
                    variant="ghost"
                    color="gray.400"
                    _hover={{ color: 'twitter.500' }}
                  >
                    <VisuallyHidden>Twitter</VisuallyHidden>
                  </IconButton>
                </a>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Text mt={8} textAlign="center" fontSize="xs" color="gray.500">
          &copy; {new Date().getFullYear()} Lucky Hotel. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;