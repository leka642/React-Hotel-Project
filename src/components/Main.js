import { Box, Button, Heading, Text, VStack, Input, Stack, Flex, Grid, Image, Card, CardBody, Icon, Avatar, ListItem, List, NumberInputField } from "@chakra-ui/react";
import { NumberInput, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from "@chakra-ui/react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Data from './../Data.json';
import { Link, useNavigate } from "react-router-dom";
import { Navigation, Pagination } from 'swiper/modules';
import { FaSwimmingPool, FaDumbbell, FaCocktail, FaSpa, FaUtensils } from 'react-icons/fa';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Main() {
    const navigate = useNavigate();
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null)
    const handleCheckAvailability = () => {
        // Navigate to the /rooms path, passing the number of adults and children as query parameters
        navigate(`/rooms?adults=${adults}&children=${children}`);
        // The Rooms component will now read these query parameters and filter.
    };

    const ServiceItem = ({ icon, title, description }) => (
        <Flex direction="column" align="start" gap={1} mb={4}>
            <Flex align="center" gap={2}>
                <Icon as={icon} color="teal.500" />
                <Text fontWeight="semibold">{title}</Text>
            </Flex>
            <Text fontSize="sm" color="gray.600">{description}</Text>
        </Flex>
    );

    return (
        <>
            <Box bgImage={"https://img.freepik.com/premium-photo/hotel-room-with-green-white-bed-large-wall-art-wall_889227-9317.jpg"}
                bgSize={"cover"}
                bgPosition={"center"}
                minH="90vh"
                w="100%"
                display={"flex"}
                padding={{ base: 4, md: 8 }} >
                <Flex direction={{ base: "column", md: "row" }}
                    alignItems={{ base: 'center', md: 'flex-start' }}
                    justifyContent={{ base: 'center', md: 'space-between' }}
                    maxWidth="container.xl"
                    width="100%"
                    gap={8}>
                    <VStack
                        alignItems={{ base: "center", md: "flex-start" }}
                        textAlign={{ base: "center", md: "left" }}
                        spacing={4}
                        ml={'10%'}
                    >
                        <Heading size={"2xl"}>Enjoy A Luxuary Experience</Heading>
                        <Text fontSize={"large"}>Discover curated experiences tailored just for you. Let us craft your perfect escape</Text>
                        <Button size={"lg"}>Visit us </Button>
                        <Box mt={{ base: 8, md: 0 }} width={{ base: '90%', md: 'auto' }}>
                            <Stack
                                direction={{ base: 'column', md: 'row' }}
                                backgroundColor="rgba(255, 255, 255, 0.5)"
                                backdropFilter="blur(10px)"
                                borderRadius={"20px"} mt={"25%"}
                                spacing={{ base: 4, md: 2 }}
                                p={6}
                                alignItems={"stretch"} >
                                <Box backgroundColor="lightwhite" backdropFilter="blur(5px)" p={4} borderRadius={"20px"} boxShadow={"2xl"} zIndex={"2000"} >
                                    <Text fontWeight="bold" mb={2}>
                                        Check In
                                    </Text>
                                    <DatePicker
                                        id="checkInDate"
                                        dateFormat="dd MMM yy"
                                        placeholderText="Check In Date"
                                        selected={checkInDate}
                                        onChange={(date) => setCheckInDate(date)}
                                        customInput={<Input />}
                                    />
                                </Box>
                                <Box backgroundColor="lightwhite" backdropFilter="blur(5px)" p={4} borderRadius={"20px"} boxShadow={"2xl"} zIndex={"1000"} >
                                    <Text fontWeight="bold" mb={2}>
                                        Check Out
                                    </Text>
                                    <DatePicker
                                        id="checkOutDate"
                                        dateFormat="dd MMM yy"
                                        placeholderText="Check Out Date"
                                        selected={checkOutDate}
                                        onChange={(date) => setCheckOutDate(date)}
                                        minDate={checkInDate} // Ensure checkout date is not before checkin
                                        customInput={<Input />}
                                    />
                                </Box>
                                <Box backgroundColor="lightwhite" backdropFilter="blur(5px)" p={4} borderRadius={"20px"} boxShadow={"2xl"} zIndex={"500"} >
                                    <Text fontWeight="bold" mb={2}>
                                        Guests
                                    </Text>
                                    <NumberInput defaultValue={1} min={1} max={4} onChange={(valueString, valueNumber) => setAdults(valueNumber)}>
                                        <NumberInputField />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                </Box>
                                <Box backgroundColor="lightwhite" backdropFilter="blur(5px)" p={4} borderRadius={"20px"} boxShadow={"2xl"} zIndex={"500"} >
                                    <Text fontWeight="bold" mb={2}>
                                        Children
                                    </Text>
                                    <NumberInput defaultValue={0} min={0} max={4} onChange={(valueString, valueNumber) => setChildren(valueNumber)}>
                                        <NumberInputField />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                </Box>
                                <Box display="flex" justifyContent="center" alignItems="center">
                                    <Button p={3} m={3}
                                        borderRadius={"20px"}
                                        boxShadow={"2xl"}
                                        bg={"#80BCAC"}
                                        color={"black"}
                                        _hover={{ color: 'white',
                                            backgroundColor: 'black' }}
                                        onClick={handleCheckAvailability} // Call the navigation function on click
                                    >Check Availability</Button>
                                </Box>
                            </Stack>
                        </Box>
                    </VStack>
                </Flex>
            </Box>
            {/*Room section (you can keep this if you want to display a preview on the main page)*/}
            <Box
            mt={"3%"}
             bgColor={"#CFF8F8"}>
            <Box
                display="flex"
                flexWrap="wrap"
                maxWidth="container.xl"
                mx="auto"
                py={10}
                justifyContent="center"
                gap={{ base: 8, md: 16 }}
               
            >
                <VStack align="center" spacing={4} mb={8}>
                    <Heading size="sm">The pleasure of Lucky</Heading>
                    <Heading size="lg">Our Rooms</Heading>
                    <Text fontSize={{ base: "md", md: "lg" }} textAlign="center">
                        Experience ultimate comfort in our elegantly appointed rooms and suites. We
                        invite you to relax in style and discover a haven designed for your
                        exclusive retreat. Each space is carefully curated to provide a sense of
                        refined luxury, making your stay an unforgettable part of your journey.
                    </Text>
                </VStack>

                {Data.Rooms.slice(0, 3).map((Room, index) => (
                    <Card
                        key={index}
                        width={{ base: "90%", md: "340px", lg: "320px" }}
                        bgColor="gray.100"
                        borderRadius="md"
                        boxShadow="md"
                        overflow="hidden"
                    >
                        <CardBody>
                            <VStack align="stretch" spacing={4}>
                                <Link to={`/roomDetail/${Room.room_id}`}> {/* Use Link to navigate to room detail */}
                                    <Image
                                        src={`${process.env.PUBLIC_URL}{Room.src}`}
                                        alt={Room.RoomName}
                                        height="200px"
                                        width="100%"
                                        objectFit="cover"
                                        borderRadius="md"
                                    />
                                </Link>
                                <Heading size="md" mt={2}>
                                    {Room.RoomName}
                                </Heading>
                                <Text fontSize="sm" color="gray.600">
                                    {Room.Description}
                                </Text>

                                <Stack direction="row" justify="space-between">
                                    <Button size="lg" colorScheme="teal"onClick={() => navigate(`/roomDetail/${Room.room_id}`)}>
                                        ₹{Room.Price}/Night
                                    </Button>
                                    <Button size="lg" colorScheme="blue" onClick={() => navigate(`/roomDetail/${Room.room_id}`)}>
                                        Book Now
                                    </Button>
                                </Stack>
                                
                            </VStack>
                        </CardBody>
                    </Card>
                ))}
            </Box>
            </Box>
            {/*about section*/}
            <Box >
                <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={4} padding={8} maxWidth="container.xl" margin="0 auto">
                    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <Image src="https://thesun.my/binrepository/0-1_708408_20191015131718.jpg" alt="About Us" borderRadius="20px" boxShadow="2xl" width={{ base: '90%', md: '80%' }} position={"relative"} />
                    </Box>
                    <VStack spacing={10} alignItems={{ base: "center", md: "flex-start" }} textAlign={{ base: "center", md: "left" }} mt={{ base: 0, md: 10 }}>
                        <Heading size={"2xl"}>About Us</Heading>
                        <Text fontSize={"large"}>Lucky Hotel was founded with a vision to create a sanctuary where guests can experience genuine hospitality and unparalleled comfort. What started as a humble endeavor has grown into a cherished destination known for its attention to detail and warm, welcoming atmosphere..</Text>
                        <Button size={"lg"} bgColor={"cadetblue"} onClick={() => navigate(`/about`)}>Learn More</Button>
                    </VStack>
                </Grid>
            </Box>
            {/* Resourt section*/}
            <Box
                position="relative"
                width="100%"
                minH="500px"
                overflow="hidden"
            >
                <Image
                    src="https://th.bing.com/th/id/R.fb071770f83d99469698c26ea165e01e?rik=L8MdZnhhE4eonA&riu=http%3a%2f%2fmedia.architecturaldigest.com%2fphotos%2f57e42deafe422b3e29b7e790%2fmaster%2fpass%2fJW_LosCabos_2015_MainExterior.jpg&ehk=T5IeAh1xUTXOGrbKtfbg8dJDabe5Nquu660Eh3%2bi%2bdY%3d&risl=&pid=ImgRaw&r=0"
                    alt="Services Background"
                    position="absolute"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    zIndex={-1}
                />
                <Flex
                    direction="column"
                    align="start"
                    bg="rgba(255, 255, 255, 0.8)"
                    position="absolute"
                    top={{ base: '0', md: '0' }}
                    right={{ base: '5%', md: '5%' }}
                    bottom={{ base: '0', md: '0' }}
                    maxWidth={{ base: '90%', md: '40%' }}
                    padding={{ base: 6, md: 8 }}
                    borderRadius="md"
                    textAlign="left"
                    gap={{ base: 4, md: 8 }}
                >
                    <Heading size="lg" >Our Services</Heading>
                    <List spacing={4} style={{ listStyleType: 'none', padding: 0 }}>
                        <ListItem>
                            <ServiceItem
                                icon={FaDumbbell}
                                title="Gym Area"
                                description="Maintain your fitness routine with our well-equipped gym."
                            />
                        </ListItem>
                        <ListItem>
                            <ServiceItem
                                icon={FaSwimmingPool}
                                title="Private Swimming Pool"
                                description="Enjoy a refreshing swim in your secluded personal pool."
                            />
                        </ListItem>
                        <ListItem>
                            <ServiceItem
                                icon={FaCocktail}
                                title="Bar"
                                description="Unwind with expertly crafted drinks in a relaxed atmosphere."
                            />
                        </ListItem>
                        <ListItem>
                            <ServiceItem
                                icon={FaSpa}
                                title="Spa"
                                description="Indulge in rejuvenating treatments for ultimate relaxation."
                            />
                        </ListItem>
                        <ListItem>
                            <ServiceItem
                                icon={FaUtensils}
                                title="Restaurant"
                                description="Savor exquisite culinary delights prepared by our chefs."
                            />
                        </ListItem>
                        {/* Add more services with title and description */}
                    </List>
                </Flex>
            </Box>

            {/* testimonial */}
            <Box py={10} bg="gray.50">
                <Box maxW="container.md" mx="auto" textAlign="center" mb={8}>
                    <Heading as="h2" size="xl" mb={2}>
                        What Our Clients Say
                    </Heading>
                    <Text color="gray.600">Read what our satisfied customers have to say about their experience.</Text>
                </Box>

                <Swiper
                    modules={[Navigation, Pagination]}
                    loop={true}
                    pagination={{ clickable: true }}
                    navigation={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 16,
                            freeMode: false,
                            loop: false,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                            freeMode: false,
                            loop: true,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                            freeMode: false,
                            loop: true,
                        },
                    }}
                >
                    {Data.testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <Card maxW="sm" mx="auto" boxShadow="md">
                                <CardBody textAlign="center" py={8}>
                                    <Avatar
                                        src={`${process.env.PUBLIC_URL}{testimonial.image}`}
                                        size="xl"
                                        mx="auto"
                                        mb={4}
                                    />
                                    <Heading size="md" mb={2}>
                                        {testimonial.name}
                                    </Heading>
                                    {testimonial.rating && (
                                        <Text fontSize="sm" color="yellow.500" mb={2}>
                                            {/* You can implement a star rating component here */}
                                            Rated: {testimonial.rating}/5
                                        </Text>
                                    )}
                                    <Text fontSize="md" color="gray.700" fontStyle="italic">
                                        "{testimonial.text}"
                                    </Text>
                                </CardBody>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </>
    );
}
export default Main;