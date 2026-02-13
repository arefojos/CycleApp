import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation } from "react-native-paper";
import { CommonActions } from "@react-navigation/native";

// Iconos
import UserIcon from "./icons/UserIcon";
import CalendarIcon from "./icons/CalendarIcon";
import CycleIcon from "./icons/CycleIcon";
import TrainIcon from "./icons/TrainIcon";
import FormIcon from "./icons/FormIcon";

// Screens
import CycleScreen from "../screens/CycleScreen";
import CalendarScreen from "../screens/CalendarScreen";
import TrainScreen from "../screens/TrainScreen";
import DailyFormScreen from "../screens/DailyFormScreen";
import UserScreen from "../screens/UserScreen";

const Tab = createBottomTabNavigator();

const ICONS = {
  Cycle: CycleIcon,
  Calendar: CalendarIcon,
  DailyForm: FormIcon,
  Train: TrainIcon,
  User: UserIcon,
};

export default function BottomNavigationComponent() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ navigation, state }) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={{ bottom: 0 }}
          style={{
            backgroundColor: "#fcebf1",
            position: "absolute",
            margin: 15,
            paddingBottom: 5,
            borderRadius: 25,
            overflow: "hidden",
          }}
          theme={{
            colors: {
              secondaryContainer: "transparent", // elimina el pill nativo
            },
          }}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused }) => {
            const IconComponent = ICONS[route.name];

            return (
              <View
                style={{
                  backgroundColor: focused ? "#c66f8020" : "transparent",
                  borderRadius: 30,
                  width: 50,
                  height: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconComponent
                  color={focused ? "#c66f80" : "#371f23"}
                  size={26}
                />
              </View>
            );
          }}
        />
      )}
    >
      <Tab.Screen name="Cycle" component={CycleScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="DailyForm" component={DailyFormScreen} />
      <Tab.Screen name="Train" component={TrainScreen} />
      <Tab.Screen name="User" component={UserScreen} />
    </Tab.Navigator>
  );
}
