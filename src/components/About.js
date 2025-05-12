import { Heading, Box, Grid, Image, VStack, Button, Text, Flex,Collapse,List,ListItem,Icon } from "@chakra-ui/react";
import React from "react";
import { useState} from "react";
import { FaSwimmingPool, FaDumbbell, FaCocktail, FaSpa, FaUtensils } from 'react-icons/fa';

const About = () => {

    const [showHistory, setShowHistory] = useState(false);
  
    const handleReadMoreHistory = () => {
      setShowHistory(!showHistory);
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
      {/* Banner */}
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
          <Heading size="2xl">About Lucky Hotel</Heading>
          <Text mt={4} fontSize="xl">Discover our story and our commitment to you.</Text>
        </VStack>
      </Box>

      {/* Our Story Section */}
      <Box py={10} maxWidth="container.xl" mx="auto" px={{ base: 4, md: 8 }}>
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={8} alignItems="center">
        
          <Box>
            <Heading mb={4}>Our Story</Heading>
            <Text fontSize="lg" lineHeight="tall">
              Lucky Hotel was founded with a vision to create a sanctuary where guests can experience genuine hospitality and unparalleled comfort. What started as a humble endeavor has grown into a cherished destination known for its attention to detail and warm, welcoming atmosphere.
            </Text>
            <Collapse startingHeight={20} in={showHistory} animateOpacity>
              <Text mt={4} fontSize="lg" lineHeight="tall">
                The journey began in [Insert Founding Year] when [Insert Founder's Name/Story]. With a passion for creating exceptional guest experiences, the first few rooms were opened, focusing on personalized service and a welcoming ambiance. Over the years, Lucky Hotel has evolved, expanding its facilities and services while staying true to its core values of quality and care. We've welcomed countless guests, each contributing to the rich tapestry of our hotel's history. From hosting local celebrations to providing a peaceful retreat for travelers, Lucky Hotel has become a landmark of hospitality in [Insert Location/Region].
              </Text>
              <Text mt={4} fontSize="lg" lineHeight="tall">
                We are proud of our heritage and continue to look forward, embracing modern comforts while preserving the charm that has made Lucky Hotel a beloved destination. Our commitment to excellence remains unwavering, as we strive to create memorable stays for every individual who walks through our doors.
              </Text>
            </Collapse>
            <Button mt={8} colorScheme="teal" size="lg" onClick={handleReadMoreHistory}>
              {showHistory ? "Read Less " : "Learn More"}
            </Button>
          </Box>
          <Box borderRadius="md" overflow="hidden" boxShadow="md">
            <Image
              src="https://thesun.my/binrepository/0-1_708408_20191015131718.jpg"
              alt="Hotel Lobby"
              width="100%"
              height="auto"
            />
          </Box>
          
        </Grid>
      </Box>
       {/* Resort Section (moved here for flow) */}
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
       

      {/* Our Commitment Section */}
   
   <Box py={16} bg="gray.50" maxWidth="container.xl" mx="auto" px={{ base: 4, md: 8 }}>
        <VStack spacing={10} align="center">
          <Heading textAlign="center" size="xl" fontWeight="semibold">
            Our Promises to You
          </Heading>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={10}>
            <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
              <Box
                bg="teal.500"
                color="white"
                borderRadius="full"
                p={6}
                mb={4}
                boxShadow="md"
              >
               
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM7 10l5-3 5 3v7H7v-7z"/>
                </svg>
              </Box>
              <Heading size="md" fontWeight="semibold" mb={2}>
                Uncompromising Comfort
              </Heading>
              <Text fontSize="sm" color="gray.600">
                Experience the ultimate relaxation in our meticulously designed spaces.
              </Text>
            </Box>

            <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
              <Box
                bg="blue.500"
                color="white"
                borderRadius="full"
                p={6}
                mb={4}
                boxShadow="md"
              >
                
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm0 2c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-2 9h4v-2h-4v2zm0-4h4V9h-4v2z"/>
                </svg>
              </Box>
              <Heading size="md" fontWeight="semibold" mb={2}>
                Exceptional Service
              </Heading>
              <Text fontSize="sm" color="gray.600">
                Our dedicated team anticipates your needs to ensure a seamless stay.
              </Text>
            </Box>

            <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
              <Box
                bg="purple.500"
                color="white"
                borderRadius="full"
                p={6}
                mb={4}
                boxShadow="md"
              >
               
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm-1 13h2v2h-2v-2zm2-4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                </svg>
              </Box>
              <Heading size="md" fontWeight="semibold" mb={2}>
                Memorable Experiences
              </Heading>
              <Text fontSize="sm" color="gray.600">
                We craft moments that linger long after you depart.
              </Text>
            </Box>
          </Grid>
        </VStack>
      </Box>
     

      
    </>
  );
};

export default About;