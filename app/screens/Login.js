import React, {useContext, useEffect, useState} from 'react';
import {
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  View,
  StyleSheet,
  Image,
  Text,
  Pressable
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { AuthContext } from '../context/AuthContext';
import Toast from 'react-native-toast-message';
import { theme } from '../core/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const {isLoading, login, message, setMessage} = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const showToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Achtung',
      text2: message,
      position: 'bottom'
    });
  }

  useEffect(() => {
    if(message != ''){
      showToast();
      setTimeout(() => {
        setMessage('')
      },5000)
    }
  },[message])
  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView behavior='position' style={styles.screen}>
        <View style={styles.container}>
          <Spinner visible={isLoading} />
          <Image source={require('../../assets/logo.png')} style={{width: 150, resizeMode: 'contain'}} />
          <Image source={require('../../assets/partner.png')} style={{width: 150,marginTop: -30, resizeMode: 'contain'}} />
          <View style={styles.wrapper}>
            
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={email}
                placeholder="E-Mail-Adresse eingeben"
                onChangeText={text => setEmail(text)}
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={password}
                placeholder="Passwort"
                onChangeText={text => setPassword(text)}
                secureTextEntry={!showPassword}
              />

              <MaterialCommunityIcons
                  name={showPassword ? 'eye-off' : 'eye'}
                  size={24}
                  color="#aaa"
                  style={styles.icon}
                  onPress={toggleShowPassword}
              />
            </View>

            <Pressable onPress={()=>login(email, password)} style={styles.fillButton}>
              <Text style={styles.fillButtonText}>Einloggen</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f3f3f3',
      borderRadius: 8,
      width:'100%',
      borderWidth:1,
      borderColor: '#bbb',
      marginBottom: 24,
      paddingHorizontal: 14,
      borderRadius: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100
  },
  wrapper: {
    width: '80%',
  },
  icon: {
      marginLeft: 10,
  },
  input: {
    paddingVertical: 12,
    flex:1
  },
  link: {
    color: 'blue',
  },
  fillButton: {
    backgroundColor: theme.colors.primary500, 
    borderRadius: 20,
    paddingVertical: 17
  },
  fillButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15
  },
});

export default LoginScreen;