import { Box, Card, Text, ScrollView } from "native-base";
import { TEMAS } from "../styles/temas";

export default function FilmesDestaque() {
  return (
    <Box  mt={3} w='100%' >
      <Text ml={2} fontSize={18} fontWeight='bold' color={TEMAS.colors.silver}>Filmes em Destaque</Text>
      <ScrollView p={2} horizontal={true} bg={TEMAS.colors.purple}  >
        <Card mr={2} w={90} h={110} color='#fff' bg={TEMAS.colors.gold}>
          iu
        </Card>
        <Card mr={2} w={90} h={110} color='#fff' bg={TEMAS.colors.gold}>
          iu
        </Card>
        <Card mr={2} w={90} h={110} color='#fff' bg={TEMAS.colors.gold}>
          iu
        </Card>
        <Card mr={2} w={90} h={110} color='#fff' bg={TEMAS.colors.gold}>
          iu
        </Card>
        <Card mr={2} w={90} h={110} color='#fff' bg={TEMAS.colors.gold}>
          iu
        </Card>
        <Card mr={2} w={90} h={110} color='#fff' bg={TEMAS.colors.gold}>
          iu
        </Card>
        <Card mr={2} w={90} h={110} color='#fff' bg={TEMAS.colors.gold}>
          iu
        </Card>
        <Card mr={2} w={90} h={110} color='#fff' bg={TEMAS.colors.gold}>
          iu
        </Card>
      </ScrollView>
    </Box>
  )
}
