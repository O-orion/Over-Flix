import { ScrollView, Text, Image, Box, View } from "native-base";
import CardDestaqueFilme from "./cardFilmeDestaque";
import { TEMAS } from "../styles/temas";

export default function FilmeDestaque() {

  return (
    <View  mt={4}>
      <Text ml={2} w='100%' fontWeight='bold' fontSize={TEMAS.fontSizes.lg} color={TEMAS.colors.silver} >Destaque da Semena</Text>
      <ScrollView p={2}  horizontal={true} >
        <CardDestaqueFilme image="https://image.tmdb.org/t/p/original/hluxFUpyRGQI3ytbzU5GGQXlZ1N.jpg" ></CardDestaqueFilme>
        <CardDestaqueFilme image="https://image.tmdb.org/t/p/original/8B5kcNrZUocXZMG80NWhroz94mf.jpg"></CardDestaqueFilme>
        <CardDestaqueFilme image="https://image.tmdb.org/t/p/original/w9aXERh3gUI9HEuuRWtwSVtkBvd.jpg"></CardDestaqueFilme>
      </ScrollView>
    </View>
  )
}
