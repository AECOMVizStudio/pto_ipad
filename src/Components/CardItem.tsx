import { Card, CardBody, Heading, Stack, Image, Text } from '@chakra-ui/react'

interface CardItemProps {
  title?: string | null;
  text?: string | null;
  imageUrl: string;
}

const CardItem: React.FC<CardItemProps> = ({ title, text, imageUrl }) => {
  // make the card dynamic based on the props it gets.
  // if there is no Text, center the Title
  return (
  <Card w='250px' bg="transparent" border="none" boxShadow = "none">
    <CardBody>
      <Image
        src={imageUrl}
        alt='brochure'
        borderRadius='lg'
      />
      <Stack spacing='3' bg="white" p="2" borderRadius='10'>
        <Heading size='md'>{title}</Heading>
        <Text>
          {text}
        </Text>
        {text && 
          <Text>
            Download Brochure
          </Text>
          }

      </Stack>
    </CardBody>
  </Card>
  )
}

export default CardItem;