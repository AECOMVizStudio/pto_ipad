import { Card, CardBody, Heading, Stack, Image, Text } from '@chakra-ui/react'

interface CardItemProps {
  title: string;
  text: string;
  imageUrl: string;
}

const CardItem: React.FC<CardItemProps> = ({ title, text, imageUrl }) => {
  return (
  <Card w='250px'>
    <CardBody>
      <Image
        src={imageUrl}
        alt='brochure'
        borderRadius='lg'
      />
      <Stack spacing='3' opacity="0.8">
        <Heading size='md'>{title}</Heading>
        <Text>
          {text}
        </Text>
      </Stack>
    </CardBody>
  </Card>
  )
}

export default CardItem;