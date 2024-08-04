import { Text, StyleSheet } from "react-native"

const BigTitle = ({children}) => {
  return (
    <Text style={styles.screenTitle}>{children}</Text>
  )
}

export default BigTitle;

const styles = StyleSheet.create({
    screenTitle: {
        fontSize: 38,
        fontWeight: 'bold'
    }
})