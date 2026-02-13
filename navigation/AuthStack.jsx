import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import DailyFormScreen from "../screens/DailyFormScreen";
import InitFormScreen from "../screens/InitFormScreen";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="DailyForm" component={DailyFormScreen} />
      <Stack.Screen name="InitForm" component={InitFormScreen} />
    </Stack.Navigator>
  );
}
