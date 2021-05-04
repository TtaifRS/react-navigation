import React, { useState, useContext } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Platform,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { AuthContext } from '../../context/context';
import { LinearGradient } from 'expo-linear-gradient';

const SignInScreen = ({ navigation }) => {
  const [data, setData] = useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const { signIn } = useContext(AuthContext);

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const loginHandle = (username, password) => {
    signIn(username, password);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="midnightblue" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.textHeader}>Welcome to Foodie</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.textFooter}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        <Text style={[styles.textFooter, { marginTop: 25 }]}>Password</Text>
        <View style={styles.action}>
          <Feather name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="black" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => {
              loginHandle(data.username, data.password);
            }}
          >
            <LinearGradient
              colors={['#02386E', '#0052a2']}
              style={styles.signIn}
            >
              <Text style={styles.textSignIn}>Sign In</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            style={[
              styles.signIn,
              {
                borderColor: 'midnightblue',
                borderWidth: 1,
                marginTop: 15,
              },
            ]}
          >
            <Text style={[styles.textSignIn, { color: '#02386e' }]}>
              SignUp
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'midnightblue',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  textHeader: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  textFooter: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
    marginTop: Platform.OS === 'ios' ? 0 : -2,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  textSignIn: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SignInScreen;

// const styles = StyleSheet.create({

//   actionError: {
//       flexDirection: 'row',
//       marginTop: 10,
//       borderBottomWidth: 1,
//       borderBottomColor: '#FF0000',
//       paddingBottom: 5
//   },
//   errorMsg: {
//       color: '#FF0000',
//       fontSize: 14,
//   },
//   signIn: {
//       width: '100%',
//       height: 50,
//       justifyContent: 'center',
//       alignItems: 'center',
//       borderRadius: 10
//   },
//   textSign: {
//       fontSize: 18,
//       fontWeight: 'bold'
//   }
// });
