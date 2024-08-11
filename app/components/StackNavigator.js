import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DatenschutzScreen, ScanerScreen, ScannerCodeScreen, ScannerInputScreen } from "../screens";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const screenOptions = {
        tabBarShowLabel: false,
        headerShown: true,
        tabBarStyle: {
            position: "absolute",
            bottom: 0,
            right: 0,
            left: 0,
            elevation: 0,
            height: 90,
            bckground: '#fff'
        }
    }

    return (
        <Stack.Navigator screenOptions={screenOptions} initialRouteName='Scaner'>
            <Stack.Screen name="Scaner" component={ScanerScreen} options={{title: 'Einscannen'}}  />
            <Stack.Screen name="ScannerInput" component={ScannerInputScreen} options={{title: 'Zurück'}} />
            <Stack.Screen name="ScannerCode" component={ScannerCodeScreen} options={{title: 'Zurück'}} />
        </Stack.Navigator>
    );
};

export default StackNavigator;