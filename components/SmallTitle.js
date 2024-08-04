import { Text, StyleSheet } from "react-native"

const SmallTitle = ({children}) => {
  return (
    <Text style={styles.screenTitle}>{children}</Text>
  )
}

export default SmallTitle;

const styles = StyleSheet.create({
    screenTitle: {
        fontSize: 18,
        fontWeight: '500'
    }
})