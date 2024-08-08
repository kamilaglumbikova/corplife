import React, {useContext, useEffect, useState} from 'react';
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Image,
  Text
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../context/AuthContext';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const {isLoading, login, message, setMessage} = useContext(AuthContext);

  useEffect(() => {
    if(message != ''){
      setTimeout(() => {
        setMessage('')
      },5000)
    }
  },[message])
  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
      <Image source={require('../../assets/logo.png')} style={{width: 150, resizeMode: 'contain'}} />
      <Image source={require('../../assets/partner.png')} style={{width: 150,marginTop: -30, resizeMode: 'contain'}} />
      <View style={styles.wrapper}>
        {message != '' && <Text>{message}</Text>}
        <TextInput
          style={styles.input}
          value={email}
          placeholder="Enter email"
          onChangeText={text => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          value={password}
          placeholder="Enter password"
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />

        <Button
          title="Login"
          onPress={() => {
            login(email, password);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '80%',
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 14,
  },
  link: {
    color: 'blue',
  },
});

export default LoginScreen;