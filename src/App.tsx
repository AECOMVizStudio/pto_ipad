import './App.css'
import {Box, Grid, GridItem, Stack, Image, VStack, Flex, Text, Button} from '@chakra-ui/react'



// components
import CardItem from './Components/CardItem'

function App() {
  const props = {
    title: 'Card Title', 
    text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sint ipsam esse.', 
    imageUrl: 'http://via.placeholder.com/640x360'
   
  };


  return (
    <>
    <Box
      bgImage="url('https://img.freepik.com/free-photo/abstract-luxury-blur-dark-grey-black-gradient_1258-53740.jpg?w=1480&t=st=1682695106~exp=1682695706~hmac=7823da520517c1c01102fea84700c2f2d9d449f684beb864f9958a877d3cbf75')"
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
        gridTemplateColumns={'250px 1fr'}
        h='100vh'
        gap='3'
        color='blackAlpha.700'
        fontWeight='bold'
      >
        <GridItem pl='2' bg='orange.300' area={'header'}>
          <Flex justify="space-between" align="center" p="4">
            
            <Text fontSize="2xl" fontWeight="bold">Process Technologies</Text>
            <Image src="http://via.placeholder.com/200x100" alt="Logo" />
          </Flex>
        </GridItem>
        <GridItem p='2' bg='blue.300' area={'sidebar'}>
          <VStack align="stretch">
            <Text fontSize="3xl" fontWeight="light" color="white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cum ullam animi quos debitis. Nemo, placeat.
            </Text>
            <Button colorScheme='teal' variant='solid'>
              Learn More
            </Button>
            <Button colorScheme='teal' variant='outline'>
              Contact Us
            </Button>
          </VStack>
        </GridItem>
        <GridItem pl='2' bg='green.300' area={'main'}>
            <Stack direction={'row'} justify='center' wrap='wrap' mt='2' p='2' spacing='25px'>

                  <CardItem {...props}/>
                  <CardItem {...props}/>
                  <CardItem {...props}/>
            </Stack>
            <Stack direction={'row'} justify='center' wrap='wrap' mt='2' p='2' spacing='25px'>
                  <CardItem {...props}/>
                  <CardItem {...props}/>
            </Stack>
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
