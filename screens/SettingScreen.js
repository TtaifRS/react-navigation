import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const SettingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text styles={{ marginBottom: 10 }}>Welcome to SettingScreen</Text>
      <StatusBar style="auto" />
      <Button title="Click Me" onPress={() => navigation.navigate('Details')} />
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

export default SettingScreen;
