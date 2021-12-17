import React from 'react'
import HomeScreen from '../Screens/HomeScreen';
import DetailScreen from '../Screens/DetailScreen';
import CreateScreen from '../Screens/CreateScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { View, Text } from 'react-native'
const Stack = createNativeStackNavigator();
const MainStack = () => {
    return (
        <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Simpsons' }}
        />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="CreateScreen" component={CreateScreen} />
      </Stack.Navigator>
      </NavigationContainer>
    )
}

export default MainStack
