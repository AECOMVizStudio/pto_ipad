import {Image, Link } from '@chakra-ui/react'


//1366 x 894
interface CardItemProps {
  imageUrl: string;
  alt: string;
  link: string;
}


const CardItem: React.FC<CardItemProps> = ({ imageUrl, alt, link }) => {
  return (
    <>
    <Link href={link} target="_blank">
      
      <Image
        src={imageUrl}
        alt={alt}
        borderRadius='lg'
        w='370px'
        h='auto'
        m='3'
        border='2px solid #ffffff'
        />
        
    </Link>
      
  </>
  )
}

export default CardItem;