import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen, LoginScreen,ScannerInputScreen,SplashScreen } from "../screens";
import {AuthContext} from '../context/AuthContext';
import { useContext } from 'react';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {userInfo, splashLoading} = useContext(AuthContext);

  return (
    <Stack.Navigator>
    {splashLoading ? (
      <Stack.Screen
        name="Splash Screen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
    ) : userInfo.data?.id ? (
      <Stack.Screen name="Home" component={HomeScreen} />
    ) : (
      <>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
      </>
    )}
  </Stack.Navigator>
  );
};

export default Navigation;