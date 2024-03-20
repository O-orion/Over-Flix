import { Box, Text, Menu } from "native-base";
import { TEMAS } from "../styles/temas";
import { Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function NavBar ( ) {
  return (
    <Box  flexDir='row' pl={2} pr={2}  justifyContent='space-between' alignItems='center'  bg={TEMAS.colors.black[100]} shadow={3} h={50} w='100%'>
      <Text fontWeight='bold' color={TEMAS.colors.silver} alignSelf='center' >Over-
        <Text fontStyle='italic' color={TEMAS.colors.red}>Flix</Text>
      </Text>

      <Menu color={TEMAS.colors.silver}   trigger={triggerProps => {
        return <Pressable accessibilityLabel="Mais opções" {...triggerProps} >
          <Ionicons name="menu-outline" size={30} color={TEMAS.colors.white}>

          </Ionicons>
        </Pressable>
      }} >
        <Menu.Group title="Opções">
          <Menu.Item color={TEMAS.colors.silver} >Filmes</Menu.Item>
          <Menu.Item>Séries</Menu.Item>
          <Menu.Item>Perfil</Menu.Item>
          <Menu.Item>Configurações</Menu.Item>
        </Menu.Group>
      </Menu>

    </Box>
  )
}
