import React, {useState, useEffect, useRef} from 'react';
import { View,Text,StyleSheet,LogBox,Button } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { BarCodeScanner } from 'expo-barcode-scanner';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

export default function ScannerCodeScreen({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    navigation.navigate({
      name: 'ScannerInput',
      params: { couponcode: data },
      merge: true,
    });
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
