import './App.css'
import {Box, Grid, GridItem, Stack, Image, VStack, Flex, Text, Button, Link} from '@chakra-ui/react'

// images
import logo from './assets/logo_aecom.png'

// components
import CardItem from './Components/CardItem'

function App() {
  const contact = 'scott.d.miller@aecom.com'
  const props1 = [
    { 
      title: 'Laboratory and Analytical Services', 
      imageUrl: './lab_service_sm.webp',
      alt:'Laboratory and Analytical Services',
      link: 'https://www.aecomprocesstechnologies.com/wp-content/uploads/2016/08/AECOM-Process-Technologies-Laboratory-and-Analytical-Services.pdf'
    },
    {
    title: 'Process Development', 
    text: 'Life Cycle R&D Services from Concept Through Commercial Operation', 
    imageUrl: './process_dev_sm.webp' ,
    alt:'process development life cycle R&D',
    link:'https://www.aecom.com/wp-content/uploads/2019/07/13_Process-Development-Brochure-Aug-2018.pdf'
    },
    {
    title: 'EPC Services', 
    imageUrl: './EPC_sm.webp',
    alt:'EPC Services, process technologies',
    link:'https://aecomprocesstechnologies.com/wp-content/uploads/2018/01/PTO-EPC-Services_singles.pdf'
    },
];
  const props2 = [
    { 
    imageUrl: './small_carbon.png',
    alt:'Carbon Capture for Utilization and storage',
    link: 'https://indd.adobe.com/view/71a3aa91-2100-4703-827c-15a988fed0be'
    },
    { 
    imageUrl: './small_future.png',
    alt:'low carbon future',
    link:'https://indd.adobe.com/view/bf8b65b5-b3ca-46bb-bf90-92e02963afc3'
    },

  ];


  return (
    <>
    <Box
      bgImage="url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80')"
      backgroundSize="cover"
      backgroundPosition="center"
      height="100vh"
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
              WebkitTextStroke: "1px black",
              textStroke: "1px black",
              }}>
              Process <br></br>Technologies</Text>
            <Image src={logo} alt="aecom logo" w="150px"/>
          </Flex>
        </GridItem>
        <GridItem 
          area={'sidebar'} 
          bg="rgba(0, 0, 0, 0.5)" 
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
            <Text fontSize="3xl" fontWeight="light"        
            css={{
            WebkitTextStroke: "1px white",
            textStroke: "1px white",
            }}>
              Delivering a better world by helping clients operate, maintain, and expand assets in a sustainable manner.
            </Text>
            <Link href = 'https://aecom.com/services/process-technologies/' target='_blank' width='100%'>
              <Button width="100%" colorScheme='teal' variant='solid'>
                Learn More
              </Button>
            </Link>
            <Link href = {`mailto:${contact}`} width='100%'>
              <Button width="100%" colorScheme='white' bg="white" color="teal" variant='solid'>
                Contact Us
              </Button>
            </Link>
          </VStack>
        </GridItem>
        <GridItem bg='transparent' area={'main'}>
            
            <Stack direction={'row'} justify='center' wrap='wrap'>
                  <CardItem {...props1[0]}/>
                  <CardItem {...props1[1]}/>
                  <CardItem {...props1[2]}/>
            </Stack>
          <div style = {{margin: "8em 0"}}>
            <Stack direction={'row'} justify='center' wrap='wrap' mt='2' spacing={12}>
                  <CardItem {...props2[0]}/>
                  <CardItem {...props2[1]}/>
            </Stack>
          </div>
          {/* <HStack>
            <CardItem />
            <CardItem />
          </HStack> */}
        </GridItem>
      </Grid>

    </Box>
    </>
  )
}

export default App
