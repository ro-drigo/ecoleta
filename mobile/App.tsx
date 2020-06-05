import React from 'react';
//importando sinal de carregamento
import {AppLoading} from 'expo';
//mudando cor da statusbar
import { StatusBar } from 'react-native';
//importando fonts
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu'
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto'

import Home from './src/pages/Home';

export default function App() {
  //chamando as fontes
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
      <Home />
    </>
  );
}