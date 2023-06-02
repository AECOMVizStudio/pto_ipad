import {Image, Box } from '@chakra-ui/react'


//1366 x 894
interface CardItemProps {
  imageUrl: string;
  alt: string;
  link: string;
}


// const CardItem: React.FC<CardItemProps> = ({ imageUrl, alt, link }) => {
const CardItem: React.FC<CardItemProps> = ({ imageUrl, alt}) => {
  // make the card dynamic based on the props it gets.
  // if there is no Text, but there is an image, center the Title vertically
  // if there is no Title, render only an Image element instead of a Card
  return (
    <>

    <Box>
      <Image
        src={imageUrl}
        alt={alt}
        borderRadius='lg'
        w='350px'
        h='auto'
        m='4'
        border='2px solid #ffffff'
        />
    </Box>
      
  </>
  )
}

export default CardItem;