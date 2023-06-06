import './App.css'
import {Box, Grid, GridItem, Stack, Image, VStack, Flex, Text, Button, Link} from '@chakra-ui/react'
import {useState} from 'react'

// images
import logo from './assets/logo_2.png'

// components
import CardItem from './Components/CardItem'

function App() {
  const [showQR, setShowQR] = useState(false);
  const handleToggle = () => {setShowQR(!showQR)}

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
      bgImage="url('https://images.unsplash.com/photo-1592722182837-52273392552d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80')"
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

          {showQR ?
            <img src="./qr.png" alt="qr code" style={{ display: "block", width: "200px",  }} />
            :
            <Text fontSize="3xl" fontWeight="light"        
            css={{
              WebkitTextStroke: "1px white",
              textStroke: "1px white",
            }}>
              Delivering a better world by helping clients operate, maintain, and expand assets in a sustainable manner.
            </Text>
          }   
            <Link href = 'https://aecom.com/services/process-technologies/' target='_blank' width='100%'>
              <Button width="100%" colorScheme='teal' variant='solid' my={2}>
                Learn More
              </Button>
            </Link>

            {showQR ? 
              <Button onClick = {handleToggle} width="100%" colorScheme='white' bg="white" color="teal" variant='solid'>
                Our Mission
              </Button>
            :<Button onClick = {handleToggle} width="100%" colorScheme='white' bg="white" color="teal" variant='solid'>
              Contact Us
            </Button>}

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