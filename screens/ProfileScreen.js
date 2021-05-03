import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const ProfileScreen = ({ navigation }) => {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProfileScreen;
