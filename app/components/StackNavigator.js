import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DatenschutzScreen, ScanerScreen, ScannerCodeScreen, ScannerInputScreen } from "../screens";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const screenOptions = {
        tabBarShowLabel: false,
        headerShown: false,
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
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="Scaner" component={ScanerScreen} />
            <Stack.Screen name="ScannerInput" component={ScannerInputScreen} />
            <Stack.Screen name="ScannerCode" component={ScannerCodeScreen} />
        </Stack.Navigator>
    );
};

export default StackNavigator;