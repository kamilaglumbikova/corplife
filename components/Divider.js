import { View, StyleSheet } from "react-native"


export default function Divider({height}) {
    return (
        <View style={[styles.divider, {height: height}]}></View>
    )
}

const styles = StyleSheet.create({
    divider: {
        width: '100%',
        backgroundColor: '#dcdcdc',
        marginTop: 16,
        marginBottom: 16
    }
})
