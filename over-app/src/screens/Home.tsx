import { Box, Text, ScrollView } from "native-base";
import { TEMAS } from "../styles/temas";
import Menu from "../components/navBar";
import FilmesDestaque from "../components/listaFilmeDestaque";

export default function Home() {
  return (
    <ScrollView bg={TEMAS.colors.black[500]} flex={1}>
      <Menu />
      <FilmesDestaque />
      <FilmesDestaque />
      <FilmesDestaque />
      <FilmesDestaque />
    </ScrollView>
  )
}
