import React, { useState } from 'react';
import {StyleSheet, TextInput, Text, SafeAreaView, View} from 'react-native';
import { theme } from '../core/theme';


export default function ScannerInputScreen() {
  const [code, setCode] = useState('');
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
  
});
