import { Box, Image } from 'native-base'
import { TEMAS } from '../styles/temas'

export default function CardFilme( ) {
  return (
    <Box p={0.5} mr={2} w={90} h={125} color='#fff' bg={TEMAS.colors.gold}>
      <Image h='100%' size={120}  source={{ uri:'https://image.tmdb.org/t/p/original/aNK6MA5EApIo0UJE7ZWSYcZBJKy.jpg' }}  alt="logo">
      </Image>
   </Box>
  )
}
