import React, { useState, useContext, useEffect } from 'react';
import {StyleSheet, TextInput, Text, SafeAreaView, View,Pressable} from 'react-native';
import { AuthContext } from "../context/AuthContext";
import { theme } from '../core/theme';
import { API_URL } from '../utils/api';
import SmallTitle from '../components/SmallTitle';
import Toast from 'react-native-toast-message';


export default function ScannerInputScreen({ route }) {
  const params = route.params;

  const [code, setCode] = useState(params?.couponcode ? params.couponcode : '');
  const [validMessage, setValidMessage] = useState('');
  const [redeemMessage, setRedeemMessage] = useState('');
  const {userInfo} = useContext(AuthContext);
  const [showButton, setShowButton] = useState(false)

  const showSuccessToast = () => {
    Toast.show({
      type: 'success',
      text1: redeemMessage,
      position: 'bottom'
    });
  }

  const showValidToast = (typeValid) => {
    Toast.show({
      type: typeValid,
      text1: typeValid == 'error' ? 'Achtung' : '',
      text2: validMessage,
      position: 'bottom'
    });
  }

  const handleInput = (text) => {
    setShowButton(false);
    setCode(text)
  }


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
          console.log("vali",responseJson)
          
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
          setCode('')
        }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  useEffect(() => {
    if(redeemMessage != '') {
      showSuccessToast();
      setTimeout(() => {
        setRedeemMessage('')
      },5000)
    }
  },[redeemMessage])

  useEffect(() => {
    if(validMessage !== '') {
      if(validMessage === 'VALID') {
        showValidToast('success');
        setShowButton(true);
      } else { 
        showValidToast('error');
        setShowButton(false);
      }
    }
  },[validMessage])

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1,paddingBottom: 100}}>
        <View style={styles.containerInner}>
          <View style={styles.form}>
            <SmallTitle>Voucher Code</SmallTitle>
            <TextInput
            style={styles.input}
            value={code}
            placeholder="Enter code"
            onChangeText={(text) => handleInput(text)}
          />
          {showButton && <Pressable onPress={handleRedeemButton} style={styles.fillButton}>
            <Text style={styles.fillButtonText}>Redeem</Text>
          </Pressable>}
          {!showButton && <Pressable onPress={handleValidateButton} style={styles.fillButton}>
            <Text style={styles.fillButtonText}>Validate</Text>
          </Pressable>}
          </View>
        </View>
      </View>
    </SafeAreaView>
)

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerInner: {
    paddingHorizontal: 20,
    paddingTop: 50,
    flex: 1,
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
    color: 'black',
    marginTop: 10
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
  form: {
    flex:1,
    justifyContent: 'center',

  }
});
