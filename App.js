import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import RootStackScreen from './screens/RootStackScreen/RootStackScreen';
import MainTabScreen from './screens/MainTabScreen';
import DrawerScreen from './screens/DrawerScreen';
import SupportScreen from './screens/SupportScreen';
import SettingScreen from './screens/SettingScreen';
import BookMarksScreen from './screens/BookMarksScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
      {/* drawer navigation */}
      {/* <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <DrawerScreen {...props} />}
      >
        <Drawer.Screen name="MainTab" component={MainTabScreen} />
        <Drawer.Screen name="Support" component={SupportScreen} />
        <Drawer.Screen name="Settings" component={SettingScreen} />
        <Drawer.Screen name="Bookmarks" component={BookMarksScreen} />
      </Drawer.Navigator> */}
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
