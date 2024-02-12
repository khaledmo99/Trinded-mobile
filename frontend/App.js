import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import home from "./pages/home";
import buy from "./pages/buy";
import Login from "./pages/login";
import Register from "./pages/register";
import NavbarMobile from "./components/Layout/Footer";
import {GestureHandlerRootView} from "react-native-gesture-handler";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{flex: 1}}>
        <Tab.Navigator tabBar={(props) => <NavbarMobile {...props} />}>
          <Tab.Screen
            name="register"
            component={Register}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="home"
            component={home}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="buy"
            component={buy}
            options={{headerShown: true}}
          />
        </Tab.Navigator>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}
