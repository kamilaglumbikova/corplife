import { View, Platform } from "react-native"
import { HomeScreen, AccountScreen, ScanerScreen } from "./screens";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';

const Tab = createBottomTabNavigator();
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

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <Ionicons name="menu-outline" size={24} color={focused ? '#16247d' : '#111'} />
                </View>
              )
            }
          }} />
        <Tab.Screen
          name="Scaner"
          component={ScanerScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{
                    top: Platform.OS == 'ios' ? -15 : -30,
                    width: Platform.OS == 'ios' ? 60 : 65,
                    height: Platform.OS == 'ios' ? 60 : 65,
                    borderRadius: Platform.OS == 'ios' ? 30 : 35,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#fff",
                    elevation: 0,
                  }}
                >
                  <View
                    style={{
                      top: Platform.OS == 'ios' ? -5 : -5,
                      width: Platform.OS == 'ios' ? 45 : 45,
                      height: Platform.OS == 'ios' ? 45 : 45,
                      borderRadius: Platform.OS == 'ios' ? 25 : 25,
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#000"
                    }}
                  >
                    <MaterialCommunityIcons name="barcode-scan" size={20} color="white" />
                  </View>
                </View>
              )
            }
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <Entypo name="dots-three-horizontal" size={24} color={focused ? '#16247d' : '#111'} />
                </View>
              )
            }
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}