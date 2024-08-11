import { StatusBar } from "react-native"
import { AuthProvider } from "./app/context/AuthContext";
import NavigationBottom from "./app/components/NavigationBottom";
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';

const toastConfig = {
  
  error: (props) => (
    <ErrorToast
      {...props}
      text1NumberOfLines={2}
      text2NumberOfLines={2}
    />
  ),
};

export default function App() {

  return (
    <AuthProvider>
      <NavigationBottom />
      <Toast config={toastConfig} />
    </AuthProvider>
    
  )
}