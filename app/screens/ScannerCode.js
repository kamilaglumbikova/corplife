import React, {useEffect, useRef} from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { Camera, useCameraPermission,useCameraDevice,useCodeScanner } from 'react-native-vision-camera';

export default function ScannerCodeScreen() {
    const { hasPermission, requestPermission } = useCameraPermission()
    const device = useCameraDevice('back')
    
    const codeScanner = useCodeScanner({
      codeTypes: ['qr', 'ean-13'],
      onCodeScanned: (codes) => {
        console.log(`Scanned ${codes.length} codes!`)
      }
    })

    useEffect(() => {
      if(!hasPermission) {
        requestPermission();
      }
    }, [hasPermission])

    if(!hasPermission) {
      return <ActivityIndicator />
    }

    if(!device) {
      return <Text>Camera device not found</Text>
    }
  
    return (
      <View style={{flex:1}}>
        <Camera codeScanner={codeScanner} style={StyleSheet.absoluteFill} device={device} isActive={true} />
      </View>    
    )

}
