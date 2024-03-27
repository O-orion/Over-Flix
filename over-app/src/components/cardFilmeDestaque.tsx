import { Box, Image } from "native-base";
import { TEMAS } from "../styles/temas";
import { PropsWithChildren } from "react";

interface PropsCardDestaqueFilme {
  image:string
}

export default function CardDestaqueFilme({ image }: PropsCardDestaqueFilme) {
  return (
    <Box  mr={2} shadow={4} borderWidth={2} borderColor={TEMAS.colors.gold}>
      <Image h='100%' w='100%' resizeMethod="resize" resizeMode="stretch"  size='180'  source={{ uri: `${image}` }}  alt="logo"></Image>
    </Box>
  )
}
