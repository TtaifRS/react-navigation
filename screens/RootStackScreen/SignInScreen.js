import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text styles={{ marginBottom: 10 }}>Welcome to SignInScreen</Text>
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

export default SignInScreen;
