import { NativeBaseProvider, StatusBar } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import { TEMAS } from './src/styles/temas';
import Home from './src/screens/Home';

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.black[100]} />
      <Home></Home>
    </NativeBaseProvider>
  );
}

