import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import { TouchableOpacity, View } from 'react-native';

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
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
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Main Page',
        headerLeft: () => (
          <View style={{ marginLeft: 10 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.openDrawer();
              }}
            >
              <Ionicons name="ios-menu" size={26} color="white" />
            </TouchableOpacity>
          </View>
        ),
      }}
    />
  </HomeStack.Navigator>
);
const DetailStackScreen = ({ navigation }) => (
  <DetailStack.Navigator
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
    <DetailStack.Screen
      name="details"
      component={DetailScreen}
      options={{
        headerLeft: () => (
          <View style={{ marginLeft: 10 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.openDrawer();
              }}
            >
              <Ionicons name="ios-menu" size={26} color="white" />
            </TouchableOpacity>
          </View>
        ),
      }}
    />
  </DetailStack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      {/* drawer navigation */}
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Details" component={DetailStackScreen} />
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
