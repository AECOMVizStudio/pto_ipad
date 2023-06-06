import './App.css'
import {Box, Grid, GridItem, Stack, Image, VStack, Flex, Text, Button} from '@chakra-ui/react'
import {useState} from 'react'

// images
import logo from './assets/logo_2.png'
import bg from './assets/bg.webp'

// components
import CardItem from './Components/CardItem'

function App() {
  const [showQRLearn, setShowQRLearn] = useState(false);
  const handleToggle = () => {setShowQRLearn(!showQRLearn), setShowQRContact(false)}

  const [showQRContact, setShowQRContact] = useState(false);
  const handleContactToggle = () => {setShowQRContact(!showQRContact), setShowQRLearn(false)}

  const props1 = [
    { 
      imageUrl: './small_carbon.png',
      alt:'Carbon Capture for Utilization and storage',
      link: './CC_and_Storage_brochure_digital_v7.pdf'
      },
      {
      imageUrl: './process_dev_sm.webp' ,
      alt:'process development life cycle R&D',
      link:'./13_Process-Development-Brochure-Aug-2018.pdf'
      },
      { 
        imageUrl: './small_future.png',
        alt:'low carbon future',
        link:'./AECOM_Low Carbon Future.pdf'
      },
      { 
        imageUrl: './lab_service_sm.webp',
        alt:'Laboratory and Analytical Services',
        link: './AECOM-Process-Technologies-Laboratory-and-Analytical-Services.pdf'
      },
      
      
];

  return (
    <>
    <Box
      bgImage={bg}
      backgroundSize="cover"
      backgroundPosition="center"
      height="100%"
      position="fixed"
      width="100%"
      zIndex="-1"
    >
      <Grid
        templateAreas={`"header header"
                        "sidebar main"
                        "sidebar main"`}
        gridTemplateRows={'150px 1fr 30px'}
        gridTemplateColumns={'225px 1fr'}
        h='100vh'
        gap='3'
        color='blackAlpha.700'
        fontWeight='bold'
      >
        <GridItem pl='2' bg='transparent' area={'header'}>
          <Flex justify="space-between" alignItems="center" p="4">
            <Text fontSize="3xl" fontWeight="light"       
              css={{
              WebkitTextStroke: "1px white",
              textStroke: "1px white",
              }}>
              Process <br></br>Technologies</Text>
            <Image src={logo} alt="aecom logo" w="150px"/>
          </Flex>
        </GridItem>
        <GridItem 
          area={'sidebar'} 
          bg="rgba(0, 0, 0, 0.20)" 
          backdropFilter="blur(10px)"
          boxShadow="lg"
          borderRadius="lg"
          maxWidth="auto"
          height="fit-content"
          py={6}
          px={2}
          mx={1}
          >
          <VStack align="stretch" ml='1'>
          <Box>



          {showQRLearn ?
            <>
              <Text fontSize='3xl' align='center' color='white' my='0'>Learn More</Text>
              <img src="./qr_learn.png" alt="qr code for learn" style={{ display: "block", width: "200px",  }} />
            </>
            :
            showQRContact ?
            <>
            <Text fontSize='3xl' align='center' color='white' my='0'>Contact Us</Text>
            <img src="./qr_contact.png" alt="qr code for contact" style={{ display: "block", width: "200px",  }} />
            </>
            :
            <Text fontSize="3xl" fontWeight="light"        
            css={{
              WebkitTextStroke: "1px white",
              textStroke: "1px white",
            }}>
              Delivering a better world by helping clients operate, maintain, and expand assets in a sustainable manner.
            </Text>
          }  



            <Button onClick = {handleContactToggle} width="100%" colorScheme='teal' variant='solid' my={2}>
                {showQRContact ? "Our Mission" : "Contact Us"}
            </Button>
            <Button onClick = {handleToggle} width="100%" colorScheme='white' bg="white" color="teal" variant='solid'>
              {showQRLearn ? "Our Mission" : "Learn More"}
            </Button>

          </Box>
          </VStack>
        </GridItem>
        <GridItem bg='transparent' area={'main'} m={0}>   
  
            <Stack direction={'row'} justify='center' wrap='wrap' m={0}>
                  <CardItem {...props1[0]}/>
                  <CardItem {...props1[1]}/>
                  <CardItem {...props1[2]}/>
                  <CardItem {...props1[3]}/>

            </Stack>
        </GridItem>
      </Grid>

    </Box>
    </>
  )
}

export default App