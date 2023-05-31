import {Image, Link } from '@chakra-ui/react'

//2732 x 2048
// 1366 x 1024
interface CardItemProps {
  imageUrl: string;
  alt: string;
  link: string;
}

const CardItem: React.FC<CardItemProps> = ({ imageUrl, alt, link }) => {
  // make the card dynamic based on the props it gets.
  // if there is no Text, but there is an image, center the Title vertically
  // if there is no Title, render only an Image element instead of a Card
  return (
    <>

    <Link href={link} isExternal>
      <Image
        src={imageUrl}
        alt={alt}
        borderRadius='lg'
        w='250px'
        h='auto'
        m='4'

        border='2px solid #ffffff'
        />
    </Link>
      
  </>
  )
}

export default CardItem;