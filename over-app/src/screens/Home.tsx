import { Box, Text } from "native-base";
import { TEMAS } from "../styles/temas";
import Menu from "../components/navBar";

export default function Home() {
  return (
    <Box bg={TEMAS.colors.black[500]} flex={1}>
      <Menu />
      <Text color={TEMAS.colors.silver} >Over-Flix</Text>
    </Box>
  )
}
