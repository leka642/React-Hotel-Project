import React, { useEffect, useState } from "react";
import { Box, VStack, Text, Heading, Card, Link, Image, CardBody, Stack, Button } from "@chakra-ui/react";
import Data from "./../Data.json";
import { useNavigate, useSearchParams } from "react-router-dom";

const Rooms = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [filteredRooms, setFilteredRooms] = useState(Data.Rooms); // Initialize with all rooms

    const handleClick = (id) => {
        navigate(`/roomDetail/${id}`);
    };

    useEffect(() => {
        const adultsParam = searchParams.get('adults');
        const childrenParam = searchParams.get('children');

        if (adultsParam !== null || childrenParam !== null) {
            const requiredAdults = parseInt(adultsParam || 0, 10);
            const requiredChildren = parseInt(childrenParam || 0, 10);
            const totalRequiredCapacity = (isNaN(requiredAdults) ? 0 : requiredAdults) + (isNaN(requiredChildren) ? 0 : requiredChildren);

            const newFilteredRooms = Data.Rooms.filter(room => {
                const roomCapacity = parseInt(room.capacity || 0, 10);
                return roomCapacity >= totalRequiredCapacity;
            });
            setFilteredRooms(newFilteredRooms);
        } else {
            // If no search parameters, show all rooms
            setFilteredRooms(Data.Rooms);
        }
    }, [searchParams]);

    return (
        <>
            <Box
                w="100%"
                minH="300px"
                bgImage="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/4e/e5/22/pool-view-at-night.jpg?w=700&h=-1&s=1"
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="white"
                textAlign="center"
            >
                <VStack>
                    <Heading size="2xl"> Lucky Hotel Rooms</Heading>
                    <Text mt={4} fontSize="xl">Discover our available rooms.</Text>
                </VStack>
            </Box>
            {/*Rooms */}
            <Box
                display="flex"
                flexWrap="wrap"
                maxWidth="container.xl"
                mx="auto" // Center the container
                py={10} // Add some vertical padding
                justifyContent="center"
                gap={{ base: 8, md: 16 }} // Responsive gap
            >
                {filteredRooms.length > 0 ? (
                    filteredRooms.map((Room, index) => (
                        <Card
                            key={index}
                            width={{ base: "90%", md: "340px", lg: "320px" }} // Responsive width
                            bgColor="gray.100" // Slightly lighter gray
                            borderRadius="md"
                            boxShadow="md"
                            overflow="hidden" // To contain rounded corners of image
                        >
                            <CardBody>
                                <VStack align="stretch" spacing={4}>
                                    <Link to={`/roomDetail/${Room.room_id}`}>
                                        <Image
                                            src={`${process.env.PUBLIC_URL}{Room.src}`}
                                            alt={Room.RoomName}
                                            height="200px"
                                            width="100%" // Make image responsive within the card
                                            objectFit="cover"
                                            borderRadius="md" // Optional: round the image corners
                                        />
                                    </Link>
                                    <Heading size="md" mt={2}>
                                        {Room.RoomName}
                                    </Heading>
                                    <Text fontSize="sm" color="gray.600">
                                        {Room.Description}
                                    </Text>

                                    <Stack direction="row" justify="space-between">
                                        <Button size="lg" colorScheme="teal" onClick={() => handleClick(Room.room_id)}>
                                            {Room.Price}/Night
                                        </Button>

                                        <Button size="lg" colorScheme="blue" onClick={() => handleClick(Room.room_id)}>
                                            Book Now
                                        </Button>
                                    </Stack>
                                   
                                </VStack>
                            </CardBody>
                        </Card>
                    ))
                ) : (
                    <Text fontSize="xl" color="gray.600">No rooms available based on your selection.</Text>
                )}
            </Box>
        </>
    );
};

export default Rooms;