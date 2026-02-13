import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomNavigation from "../components/BottomNavigation";
import InitFormScreen from "../screens/InitFormScreen";
import DailyFormScreen from "../screens/DailyFormScreen";
import UserScreen from "../screens/UserScreen";
import UserSettings from "../screens/UserSettings";
import SuggestionScreen from "../screens/SuggestionScreen";
import EditUser from "../screens/EditUser"; 
import NewPasswordScreen from "../screens/NewPasswordScreen";
import DeleteAccountScreen from "../screens/DeleteAccountScreen";

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={BottomNavigation} />
      <Stack.Screen name="InitForm" component={InitFormScreen} />
      <Stack.Screen name="DailyForm" component={DailyFormScreen} />
      <Stack.Screen name="UserScreen" component={UserScreen} />
      <Stack.Screen name="UserSettings" component={UserSettings} />
      <Stack.Screen name="SuggestionScreen" component={SuggestionScreen} />
      <Stack.Screen name="EditUser" component={EditUser} />
      <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
      <Stack.Screen name="DeleteAccountScreen" component={DeleteAccountScreen} />
    </Stack.Navigator>
  );
}
