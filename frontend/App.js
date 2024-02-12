import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import home from './pages/home';
import buy from './pages/buy'; 
import Login from './pages/login';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="home" component={home} options={{ headerShown: false }} />
        <Stack.Screen name="buy" component={buy} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
