import { Box, Text, Menu, Input, Icon } from "native-base";
import { TEMAS } from "../styles/temas";
import { Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function NavBar ( ) {
  return (
    <Box  flexDir='row' pl={2} pr={2}  justifyContent='space-between' alignItems='center'  bg={TEMAS.colors.black[100]} shadow={3} h={50} w='100%'>
      <Text fontSize={17} fontWeight='bold' color={TEMAS.colors.silver} alignSelf='center' >Over-
        <Text fontStyle='italic' color={TEMAS.colors.red}>Flix</Text>
      </Text>

      <Box display='flex' flexDir='row' justifyContent='center' alignItems='center' alignContent='center'>
        <Input pl={2} borderColor={TEMAS.colors.gold} color={TEMAS.colors.silver} w='78%' placeholder="Pesquise..." h={8}
        InputRightElement={<Ionicons mr="2" size={18} color={TEMAS.colors.gold} name="search-outline" ></Ionicons>}
        ></Input>

        <Menu fontSize={2} color={TEMAS.colors.silver}   trigger={triggerProps => {
        return <Pressable accessibilityLabel="Mais opções" {...triggerProps} >
          <Ionicons  name="menu-outline" size={30} color={TEMAS.colors.white}>

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

    </Box>
  )
}
