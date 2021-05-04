import 'react-native-gesture-handler';

import React, { useState, useEffect, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import RootStackScreen from './screens/RootStackScreen/RootStackScreen';
import MainTabScreen from './screens/MainTabScreen';
import DrawerScreen from './screens/DrawerScreen';
import SupportScreen from './screens/SupportScreen';
import SettingScreen from './screens/SettingScreen';
import BookMarksScreen from './screens/BookMarksScreen';
import { ActivityIndicator, View } from 'react-native';
import { AuthContext } from './context/context';

const Drawer = createDrawerNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContext = useMemo(() => ({
    signIn: () => {
      setUserToken('ahaf');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('ahaf');
      setIsLoading(false);
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="grey" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken !== null ? (
          <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={(props) => <DrawerScreen {...props} />}
          >
            <Drawer.Screen name="MainTab" component={MainTabScreen} />
            <Drawer.Screen name="Support" component={SupportScreen} />
            <Drawer.Screen name="Settings" component={SettingScreen} />
            <Drawer.Screen name="Bookmarks" component={BookMarksScreen} />
          </Drawer.Navigator>
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
