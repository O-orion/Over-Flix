import { Box, Text, Menu } from "native-base";
import { TEMAS } from "../styles/temas";
import { Pressable } from "react-native";
import { HamburgerIcon } from "@expo/vector-icons";

export default function NavBar ( ) {
  return (
    <Box  flexDir='row' pl={2} pr={2}  justifyContent='space-between'  bg={TEMAS.colors.black[100]} shadow={3} h={50} w='100%'>
      <Text color={TEMAS.colors.silver} alignSelf='center' >Over-Flix </Text>

      <Menu w={20} trigger={triggerProps => {
        return <Pressable accessibilityLabel="Mais opções" {...triggerProps} >
          <HamburgerIcon >

          </HamburgerIcon>
        </Pressable>
      }} >

      </Menu>

    </Box>
  )
}
