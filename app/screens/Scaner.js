import React from 'react';
import {StyleSheet, ScrollView, View, Image, Pressable,Text,Platform, SafeAreaView} from 'react-native';
import BigTitle from '../components/BigTitle';
import { theme } from '../core/theme';


export default function ScannerScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.containerInner}>
        <View style={{flex: 1,paddingBottom: 100}}>
              <BigTitle>Einscannen</BigTitle>
              <View style={styles.imgContainer}>
                <Image source={require('../../assets/qr_code.png')} />
              </View>
              <Text style={styles.text}>Bitte den QR-Code einscannen oder die Gutschein-Codes eingeben</Text>
              <View>
                  <Pressable onPress={()=>navigation.navigate('ScannerInput')} style={styles.fillButton}>
                    <Text style={styles.fillButtonText}>Gutschein manuell hinzufügen</Text>
                  </Pressable>
                <Text style={styles.or}>oder</Text>
                <Pressable onPress={()=>navigation.navigate('ScannerCode')} style={styles.borderButton}>
                  <Text style={styles.borderButtonText}>QR-Code scannen</Text>
                </Pressable>
              </View>
          </View>
      </ScrollView>
    </SafeAreaView>
)

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  containerInner: {
    paddingHorizontal: 20,
    paddingTop: 50,
    flex: 1,
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 30
  },
  borderButton: {
    backgroundColor: 'white', 
    borderRadius: 20,
    paddingVertical: 12,
    borderColor: theme.colors.primary500,
    borderWidth: 1
  },
  borderButtonText: {
    color: theme.colors.primary500,
    textAlign: 'center',
    fontSize: 15
  },
  fillButton: {
    backgroundColor: theme.colors.primary500, 
    borderRadius: 20,
    paddingVertical: 12
  },
  fillButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15
  },
  or: {
    textAlign: 'center',
    marginVertical: 10
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 30,
    marginTop: 20
  }
});
