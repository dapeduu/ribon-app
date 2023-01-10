/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";
import CausesIconOn from "./assets/CausesIconOn";
import CausesIconOff from "./assets/CausesIconOff";
import ProfileIconOn from "./assets/ProfileIconOn";
import ProfileIconOff from "./assets/ProfileIconOff";
import Colors from "utils/constants/Colors";
import useColorScheme from "hooks/useColorScheme";
import DonateModal from "screens/donations/DonateModal";
import NotFoundScreen from "screens/NotFoundScreen";
import CausesScreen from "screens/donations/CausesScreen";
import ProfileScreen from "screens/ProfileScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "types";
import LinkingConfiguration from "./LinkingConfiguration";
import { theme } from "@ribon.io/shared/styles";
import CurrentUserProvider from "contexts/currentUserContext";
import DonationDoneScreen from "screens/donations/DonationDoneScreen";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <CurrentUserProvider>
        <RootNavigator />
      </CurrentUserProvider>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />

      <Stack.Screen
        name="DonationDoneScreen"
        component={DonationDoneScreen}
        options={{ headerShown: false, animation: "slide_from_bottom" }}
      />

      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="DonateModal" component={DonateModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const activeColor = theme.colors.green30;

  return (
    <BottomTab.Navigator
      initialRouteName="CausesScreen"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="CausesScreen"
        component={CausesScreen}
        options={({ navigation }: RootTabScreenProps<"CausesScreen">) => ({
          title: "Causes",
          tabBarIcon: ({ color }) =>
            color === activeColor ? <CausesIconOn /> : <CausesIconOff />,
        })}
      />
      <BottomTab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }: any) =>
            color === activeColor ? <ProfileIconOn /> : <ProfileIconOff />,
        }}
      />
    </BottomTab.Navigator>
  );
}
