import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AccountScreen, AgbScreen, DatenschutzScreen, ImpressumScreen, ScanerScreen, ScannerCodeScreen, ScannerInputScreen } from "../screens";

const Stack = createNativeStackNavigator();

const StackNavigatorAccount = () => {
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
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="Account" component={AccountScreen} />
            <Stack.Screen name="Datenschutz" component={DatenschutzScreen} />
            <Stack.Screen name="Agb" component={AgbScreen} />
            <Stack.Screen name="Impressum" component={ImpressumScreen} />
        </Stack.Navigator>
    );
};

export default StackNavigatorAccount;