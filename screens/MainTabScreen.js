import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import ProfileScreen from './ProfileScreen';
import ExploreScreen from './ExploreScreen';

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Feed" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: 'hotpink',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={DetailStackScreen}
      options={{
        tabBarLabel: 'Updates',
        tabBarColor: '#0579b3f0',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bell" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        tabBarLabel: 'Explore',
        tabBarColor: 'tomato',
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="explore" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: 'indigo',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'hotpink',
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
