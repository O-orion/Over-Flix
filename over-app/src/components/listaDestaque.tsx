import { Box, Card, Text, ScrollView, Image, Link } from "native-base";
import { TEMAS } from "../styles/temas";

export default function ListaFilme() {
  return (
    <Box  mt={3} w='100%' >
      <Box flexDir='row'  justifyContent='space-between'  alignItems='center'>
        <Text ml={2} fontSize={18} fontWeight='bold' color={TEMAS.colors.silver}>Filmes em Destaque</Text>
        <Link mr={2} fontSize={12} fontWeight='bold' color={TEMAS.colors.red}>Ver mais</Link>
      </Box>
      <ScrollView p={2} horizontal={true}    >
        <Box p={0.5} mr={2} w={90} h={125} color='#fff' bg={TEMAS.colors.gold}>
          <Image h='100%' size={120}  source={{ uri:'https://image.tmdb.org/t/p/original/aNK6MA5EApIo0UJE7ZWSYcZBJKy.jpg' }}  alt="logo">

          </Image>
        </Box>
        <Box p={0.5} mr={2} w={90} h={125} color='#fff' bg={TEMAS.colors.gold}>
          <Image h='100%' size={120}  source={{ uri:'https://image.tmdb.org/t/p/original/1N7terrMeZPwK5qq31MUD0HQ3IG.jpg' }}  alt="logo">

          </Image>
        </Box>
        <Box p={0.5} mr={2} w={90} h={125} color='#fff' bg={TEMAS.colors.gold}>
          <Image h='100%' size={120}  source={{ uri:'https://image.tmdb.org/t/p/original/2ac7U6PTQj9pfCLDLXNzn45uAkC.jpg' }}  alt="logo">

          </Image>
        </Box>
        <Box p={0.5} mr={2} w={90} h={125} color='#fff' bg={TEMAS.colors.gold}>
          <Image h='100%' size={120}  source={{ uri:'https://image.tmdb.org/t/p/original/uQWEomz2wLoijrvoFaJt2gUMXRu.jpg' }}  alt="logo">

          </Image>
        </Box>
        <Box p={0.5} mr={2} w={90} h={125} color='#fff' bg={TEMAS.colors.gold}>
          <Image h='100%' size={120}  source={{ uri:'https://image.tmdb.org/t/p/original/aNK6MA5EApIo0UJE7ZWSYcZBJKy.jpg' }}  alt="logo">

          </Image>
        </Box>
        <Box p={0.5} mr={2} w={90} h={125} color='#fff' bg={TEMAS.colors.gold}>
          <Image h='100%' size={120}  source={{ uri:'https://image.tmdb.org/t/p/original/aNK6MA5EApIo0UJE7ZWSYcZBJKy.jpg' }}  alt="logo">

          </Image>
        </Box>
        <Box p={0.5} mr={2} w={90} h={125} color='#fff' bg={TEMAS.colors.gold}>
          <Image h='100%' size={120}  source={{ uri:'https://image.tmdb.org/t/p/original/aNK6MA5EApIo0UJE7ZWSYcZBJKy.jpg' }}  alt="logo">

          </Image>
        </Box>

      </ScrollView>
    </Box>
  )
}
