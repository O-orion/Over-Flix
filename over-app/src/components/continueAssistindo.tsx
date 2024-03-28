import { Box, Image, Text } from "native-base";
import { TEMAS } from "../styles/temas";

export default function ContinueAssistindo() {
  return (
    <Box ml={2} mr={2} p={2} shadow={2} bg={TEMAS.colors.black[100]}>
      <Text fontWeight='600' color={TEMAS.colors.gold}>Continue Assistindo</Text>
      <Box mt={2} p={2}>
        <Image  resizeMode="stretch" resizeMethod="scale" size={150} w='100%' source={{ uri: "https://image.tmdb.org/t/p/original/hluxFUpyRGQI3ytbzU5GGQXlZ1N.jpg"}} ></Image>
        <Text  textTransform='capitalize' textAlign='justify' color={TEMAS.colors.silver}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid sit, asperiores quos illo repellat autem nobis fugiat aliquam? Esse cum illum sunt, quo minus natus magnam officiis aspernatur fugiat mollitia.
        </Text>
      </Box>
    </Box>
  )
}
