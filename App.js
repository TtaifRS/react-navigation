import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 10 }}>
        Welcome to React Native Navigation
      </Text>
      <Button
        title="Details Screen"
        onPress={() => navigation.navigate('Details')}
      />
      <StatusBar style="auto" />
    </View>
  );
};

const DetailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>DetailS Screen</Text>
      <StatusBar style="auto" />
      <View style={{ margin: 10 }}>
        <Button
          title="Details Screen again"
          onPress={() => navigation.push('Details')}
        />
        <Button
          title="Home Screen"
          onPress={() => navigation.navigate('Home')}
        />
        <Button title="Back Screen" onPress={() => navigation.goBack()} />
        <Button
          title="Go to the first screen"
          onPress={() => navigation.popToTop()}
        />
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
