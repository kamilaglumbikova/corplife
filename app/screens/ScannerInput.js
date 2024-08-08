import React, { useState, useContext, useEffect } from 'react';
import {StyleSheet, TextInput, Text, SafeAreaView, View,Pressable} from 'react-native';
import { AuthContext } from "../context/AuthContext";
import { theme } from '../core/theme';
import { API_URL } from '../utils/api';


export default function ScannerInputScreen() {
  const [code, setCode] = useState('');
  const [validMessage, setValidMessage] = useState('');
  const [redeemMessage, setRedeemMessage] = useState('');
  const {userInfo} = useContext(AuthContext);

  const handleValidateButton = () => {
    var data = new FormData();
    data.append("coupon_code", code);
    fetch(`${API_URL}/validate/voucher`, {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
      },
      body:data,
    })
    .then((response) => response.json())
    .then((responseJson) => {
        if(responseJson.message) {
          setValidMessage(responseJson.message)
        }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  const handleRedeemButton = () => {
    var data = new FormData();
    data.append("coupon_code", code);
    data.append("merchant_id", userInfo.data.id);
    fetch(`${API_URL}/redeem/voucher`, {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
      },
      body:data,
    })
    .then((response) => response.json())
    .then((responseJson) => {
        setValidMessage();
        if(responseJson.message) {
          setRedeemMessage(responseJson.message);
        }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  useEffect(() => {
    if(redeemMessage != '') {
      setTimeout(() => {
        setRedeemMessage('')
      },5000)
    }
  },[redeemMessage])

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.containerInner}>
          <Text>Code</Text> 
          <TextInput
          style={styles.input}
          value={code}
          placeholder="Enter code"
          onChangeText={(text) => {setCode(text)}}
        />
        {validMessage != '' && <Text>{validMessage}</Text>}
        {redeemMessage != '' && <Text>{redeemMessage}</Text>}
        {validMessage === 'VALID' && <Pressable onPress={handleRedeemButton} style={styles.fillButton}>
          <Text style={styles.fillButtonText}>Redeem</Text>
        </Pressable>}
        {validMessage !== 'VALID' && <Pressable onPress={handleValidateButton} style={styles.fillButton}>
          <Text style={styles.fillButtonText}>Validate</Text>
        </Pressable>}
        </View>
    </SafeAreaView>
)

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerInner: {
    paddingHorizontal: 20,
    width: '100%',
    flex:1, 
    justifyContent:"center", 
    alignItems:'center'
  },
  input: {
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.primary500,
    borderRadius: 0,
    paddingHorizontal: 14,
    width: '100%',
    height: 45,
    backgroundColor: theme.colors.primary200,
    color: 'black'
  },
  fillButton: {
    backgroundColor: theme.colors.primary500, 
    borderRadius: 20,
    paddingVertical: 12,
    width:'100%'
  },
  fillButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15
  },
});
