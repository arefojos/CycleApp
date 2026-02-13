import React from 'react';
import BottomNavigation from './components/BottomNavigation';
import RegisterComponent from './components/RegisterComponent';
import LoginComponent from './components/LoginComponent';
import LogoComponent from './components/LogoComponent';
import InitFormScreen from './screens/InitFormScreen';
import Loader from './components/Loader';
import DailyFormScreen from './screens/DailyFormScreen';
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { useFonts } from 'expo-font';
import RootStack from "./navigation/RootStack";

import AuthStack from './navigation/AuthStack';

export default function App() {
  const [fontsLoaded] = useFonts({
    Marimpa: require('./assets/fonts/Marimpa.ttf'),
    Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <PaperProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </PaperProvider>
  );
}


