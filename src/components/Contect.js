import React, { useState } from 'react';
import {
    Box,
    Heading,
    Text,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    Stack,
    Icon,
    Link,
    FormErrorMessage,
} from '@chakra-ui/react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contect = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setNameError('');
        setEmailError('');
        setMessageError('');
        let isValid = true;

        if (!name.trim()) {
            setNameError('Name is required');
            isValid = false;
        }

        if (!email.trim()) {
            setEmailError('Email is required');
            isValid = false;
        } else if (!validateEmail(email)) {
            setEmailError('Invalid email format');
            isValid = false;
        }

        if (!message.trim()) {
            setMessageError('Message is required');
            isValid = false;
        }

        if (isValid) {
            setIsSubmitting(true);
            try {
                // Simulate form submission (replace with your actual API call)
                await new Promise((resolve) => setTimeout(resolve, 2000));
                alert('Message sent successfully!');
                setName('');
                setEmail('');
                setMessage('');
            } catch (error) {
                alert('Failed to send message. Please try again later.');
                console.error('Form submission error:', error);
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <Box
            bg="gray.50"
            py={12}
            px={{ base: 4, md: 8, lg: 16 }}
        >
            <Box
                maxWidth="container.md"
                mx="auto"
                borderRadius="md"
                bg="white"
                boxShadow="lg"
                p={{ base: 6, md: 8 }}
            >
                <Heading
                    as="h2"
                    size="xl"
                    fontWeight="bold"
                    textAlign="center"
                    mb={6}
                    color="teal.500"
                >
                    Contact Us
                </Heading>

                <Stack spacing={6} mb={8} as="form" onSubmit={handleSubmit}>
                    <Box>
                        <Heading as="h3" size="md" fontWeight="semibold" mb={2}>
                            Get in Touch
                        </Heading>
                        <Text color="gray.600">
                            We'd love to hear from you! Please use the form below or our contact details.
                        </Text>
                    </Box>

                    <FormControl id="name" isInvalid={!!nameError}>
                        <FormLabel fontWeight="semibold">Your Name*</FormLabel>
                        <Input
                            type="text"
                            placeholder="Enter your name"
                            borderRadius="sm"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <FormErrorMessage>{nameError}</FormErrorMessage>
                    </FormControl>

                    <FormControl id="email" isInvalid={!!emailError}>
                        <FormLabel fontWeight="semibold">Your Email*</FormLabel>
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            borderRadius="sm"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <FormErrorMessage>{emailError}</FormErrorMessage>
                    </FormControl>

                    <FormControl id="message" isInvalid={!!messageError}>
                        <FormLabel fontWeight="semibold">Message*</FormLabel>
                        <Textarea
                            rows={5}
                            placeholder="Enter your message"
                            borderRadius="sm"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <FormErrorMessage>{messageError}</FormErrorMessage>
                    </FormControl>

                    <Button
                        type="submit"
                        colorScheme="teal"
                        size="md"
                        borderRadius="sm"
                        boxShadow="md"
                        _hover={{ boxShadow: 'lg' }}
                        isLoading={isSubmitting}
                        loadingText="Sending..."
                    >
                        Send Message
                    </Button>
                </Stack>

                <Box mt={8}>
                    <Heading as="h3" size="md" fontWeight="semibold" mb={4}>
                        Our Contact Information
                    </Heading>
                    <Stack spacing={3}>
                        <Link href="#" display="flex" alignItems="center" color="gray.700">
                            <Icon as={FaMapMarkerAlt} mr={3} color="teal.500" />
                            <Text> Hotel Address , Salem, Tamil Nadu, India</Text>
                        </Link>
                        <Link href="tel:+91XXXXXXXXXX" display="flex" alignItems="center" color="gray.700">
                            <Icon as={FaPhone} mr={3} color="teal.500" />
                            <Text>+91 XXXXXXXXXX</Text>
                        </Link>
                        <Link href="mailto:info@yourhotel.com" display="flex" alignItems="center" color="gray.700">
                            <Icon as={FaEnvelope} mr={3} color="teal.500" />
                            <Text>luckyinfo@luckyhotel.com</Text>
                        </Link>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
};

export default Contect;