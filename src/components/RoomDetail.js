import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  VStack,
  Image,
  Grid,
  Divider,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  SimpleGrid,
  List,
  ListItem,
  Icon,
  HStack,
  Button,
} from "@chakra-ui/react";
import Data from "./../Data.json";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaBed,FaBath,FaTv,FaWifi } from "react-icons/fa";

const GST_RATE = 0.12; // 12% GST

const RoomDetail = () => {
  console.log("RoomDetail component rendered");
  const { id } = useParams();
  const room = Data.Rooms.find((r) => r.room_id === id);
 
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [numberOfNights, setNumberOfNights] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [gstAmount, setGstAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
   const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const facilityIcons = {
    bed: FaBed,
    bath: FaBath,
    internet: FaWifi, // Added 'internet' as a broader keyword
    television: FaTv, // Added 'television' as a broader keyword
    // Add more mappings as needed
  }; 

  useEffect(() => {
    if (checkInDate && checkOutDate && room) {
      const timeDifference = checkOutDate.getTime() - checkInDate.getTime();
      const nights = Math.ceil(timeDifference / (1000 * 3600 * 24));
      setNumberOfNights(nights > 0 ? nights : 0);
    } else {
      setNumberOfNights(0);
    }
  }, [checkInDate, checkOutDate]);

  useEffect(() => {
    if (room && numberOfNights > 0) {
      const sub = room.Price * numberOfNights;
      setSubtotal(sub);
      const gst = sub * GST_RATE;
      setGstAmount(gst);
      setTotalAmount(sub + gst);
    } else {
      setSubtotal(0);
      setGstAmount(0);
      setTotalAmount(0);
    }
  }, [room, numberOfNights]);
  

  if (!room) {
    return <Box p={5}>Room not found.</Box>;
  }

  return (
    <Box py={16} maxWidth="container.xl" mx="auto" px={{ base: 4, md: 8 }}>
      {/* Main Image */}
      {room.images?.main && (
        <Box borderRadius="lg" overflow="hidden" mb={8} boxShadow="xl">
          <Image src={room.images.main} alt={room.RoomName} width="100%" height="500px" objectFit="cover" />
        </Box>
      )}

      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={10}>
        {/* Left Side: Details (including Gallery) */}
        <VStack align="start" spacing={8}>
          <Box>
            <Heading size="xl" fontWeight="bold" mb={4}>{room.RoomName}</Heading>
            <Text fontSize="lg" color="gray.600">{room.Description}</Text>
          </Box>

          <Divider />

          {/* Image Gallery */}
          {room.images && (
            <Box w="100%">
              <Heading size="md" fontWeight="semibold" mb={4}>Gallery</Heading>
              <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4}>
                {Object.keys(room.images)
                  .filter((key) => key !== "main")
                  .map((key) => (
                    <Box key={key} borderRadius="md" overflow="hidden" boxShadow="sm">
                      <Image src={`${process.env.PUBLIC_URL}{room.images[key]}`} alt={`${room.RoomName} ${key}`} width="100%" height="200px" objectFit="cover" />
                    </Box>
                  ))}
              </SimpleGrid>
            </Box>
          )}

          <Divider />

          {/* Facilities */}
         

{room.facilities && room.facilities.length > 0 && (
            <Box>
              <Heading size="md" fontWeight="semibold" mb={4}>Facilities</Heading>
              <List spacing={3}>
                {room.facilities.map((facility, index) => {
                  const lowerFacility = facility.toLowerCase();
                  let icon = null;
                  for (const key in facilityIcons) {
                    if (lowerFacility.includes(key)) {
                      icon = facilityIcons[key];
                      console.log(`Facility: "${facility}", Keyword: "${key}", Icon:`, icon);
                      break;
                    }
                  }
                  return (
                    <ListItem key={index} display="flex" alignItems="center">
                      {icon && <Icon as={icon} mr={2} color="teal.500" />}
                      <Text>{facility}</Text>
                    </ListItem>
                  );
                })}
              </List>
            </Box>
          )}  
        </VStack>

        {/* Right Side: Booking */}
        <Box
          p={6}
          borderRadius="md"
          boxShadow="sm"
          position="sticky"
          top="20px"
          bg="gray.100" // Changed background color
          color="gray.700"
          width={{ base: "100%", md: "auto" }}
          alignSelf="start"
        >
          <Heading size="md" fontWeight="semibold" mb={4} textAlign="center">
            Book Your Stay
          </Heading>
          <VStack spacing={4}>
            <FormControl id="check-in">
              <FormLabel fontWeight="semibold" fontSize="sm">Check-in</FormLabel>
              <DatePicker
                                                      id="checkInDate"
                                                      dateFormat="dd MMM yy"
                                                      placeholderText="Check In Date"
                                                      selected={checkInDate}
                                                      onChange={(date) => setCheckInDate(date)}
                                                      customInput={<Input />}
                                                  />
            </FormControl>
            <FormControl id="check-out">
              <FormLabel fontWeight="semibold" fontSize="sm">Check-out</FormLabel>
              <DatePicker
                                                     id="checkOutDate"
                                                     dateFormat="dd MMM yy"
                                                     placeholderText="Check Out Date"
                                                     selected={checkOutDate}
                                                     onChange={(date) => setCheckOutDate(date)}
                                                     minDate={checkInDate} // Ensure checkout date is not before checkin
                                                     customInput={<Input />}
                                                 />
            </FormControl>
            <FormControl id="adults">
              <FormLabel fontWeight="semibold" fontSize="sm">Adults</FormLabel>
              <NumberInput defaultValue={1} min={1} max={4} size="sm" onChange={(value) => setAdults(parseInt(value, 10))}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl id="children">
              <FormLabel fontWeight="semibold" fontSize="sm">Children</FormLabel>
              <NumberInput defaultValue={0} min={0} max={4} size="sm" onChange={(value) => setChildren(parseInt(value, 10))}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <Divider borderColor="gray.300" />

            <VStack align="start" spacing={1} w="full">
              <HStack justify="space-between" w="full" fontSize="sm">
                <Text fontWeight="semibold">Price:</Text>
                <Text>₹{room.Price}/night</Text>
              </HStack>
              {numberOfNights > 0 && (
                <>
                  <HStack justify="space-between" w="full" fontSize="sm">
                    <Text>Nights:</Text>
                    <Text fontWeight="medium">{numberOfNights}</Text>
                  </HStack>
                  <HStack justify="space-between" w="full" fontSize="sm">
                    <Text fontWeight="semibold">Subtotal:</Text>
                    <Text>₹{subtotal.toFixed(2)}</Text>
                  </HStack>
                  <HStack justify="space-between" w="full" fontSize="sm">
                    <Text fontWeight="semibold">GST:</Text>
                    <Text>₹{gstAmount.toFixed(2)}</Text>
                  </HStack>
                  <HStack justify="space-between" w="full">
                    <Heading size="sm">Total:</Heading>
                    <Heading size="sm" color="blue.600">₹{totalAmount.toFixed(2)}</Heading>
                  </HStack>
                </>
              )}
            </VStack>

            <Button
              colorScheme="blue"
              size="sm"
              w="full"
              mt={4}
              boxShadow="sm"
              _hover={{ boxShadow: "md" }}
              isDisabled={numberOfNights === 0}
              onClick={() => {
                if (numberOfNights > 0) {
                  const confirmation = window.confirm(
                    `Confirm booking for ${adults} adults and ${children} children for ${numberOfNights} nights? Total: ₹${totalAmount.toFixed(2)}`
                  );
                  if (confirmation) {
                    alert("Booking confirmed (this is a simulation)");
                    // In a real application, you would proceed with the booking here
                  }
                } else {
                  alert("Please select check-in and check-out dates.");
                }
              }}
            >
              Book Now for ₹{totalAmount.toFixed(2)}
            </Button>
          </VStack>
        </Box>
      </Grid>
    </Box>
  );
};

export default RoomDetail;