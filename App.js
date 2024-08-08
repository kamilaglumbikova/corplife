import { StatusBar } from "react-native"
import { AuthProvider } from "./app/context/AuthContext";
import NavigationBottom from "./app/components/NavigationBottom";

export default function App() {

  return (
    <AuthProvider>
      <StatusBar backgroundColor="#06bcee" />
      <NavigationBottom />
    </AuthProvider>
    
  )
}