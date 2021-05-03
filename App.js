import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* drawer navigation */}
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainTabScreen} />
        {/* <Drawer.Screen name="Details" component={DetailStackScreen} /> */}
      </Drawer.Navigator>
      {/* stack navigation */}
      {/* <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0579b3f0',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Main Page' }}
        />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default App;
