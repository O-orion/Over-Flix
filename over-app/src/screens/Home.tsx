import { Box, Text, ScrollView } from "native-base";
import { TEMAS } from "../styles/temas";
import Menu from "../components/navBar";
import ListaFilme from "../components/listaDestaque";
import FilmeDestaque from "../components/filmeDestaque";
import ContinueAssistindo from "../components/continueAssistindo";

export default function Home() {
  return (
    <ScrollView bg={TEMAS.colors.black[500]} flex={1}>
      <Menu />
      <FilmeDestaque />
      <ContinueAssistindo />
      <ListaFilme />
    </ScrollView>
  )
}
