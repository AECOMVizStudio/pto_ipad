import { Card, CardBody, Heading, Stack, Image, Text, Link } from '@chakra-ui/react'

interface CardItemProps {
  title?: string | null;
  text?: string | null;
  imageUrl: string;
  alt: string;
  link: string;
}

const CardItem: React.FC<CardItemProps> = ({ title, text, imageUrl, alt, link }) => {
  // make the card dynamic based on the props it gets.
  // if there is no Text, but there is an image, center the Title vertically
  // if there is no Title, render only an Image element instead of a Card
  return (
    <>
    {title ? 
      <Card w='290px' bg="transparent" border="none" boxShadow = "none">
      <CardBody>
        <Link href = {link} target="_blank">
          <Image
            src={imageUrl}
            alt='brochure'
            borderRadius='lg'
            // borderBottomRadius={0}
            />
        </Link>
        <Stack bg="transparent" opacity='0.9' p="2" borderRadius='lg' borderTopRadius={0}>
          {/* <Heading size='md'>{title}</Heading> */}
          {/* <Text fontWeight='medium'>
            {text}
          </Text> 
            {link && 
              <Link size='sm' href={link} isExternal textTransform='uppercase'>
                Download Brochure
              </Link>
            } */}
        </Stack>
      </CardBody>
    </Card>
    :
    <Link href={link} isExternal>
      <Image
        src={imageUrl}
        alt={alt}
        borderRadius='lg'
        w='250px'
        h='auto'
        />
    </Link>
      }

  </>
  )
}

export default CardItem;