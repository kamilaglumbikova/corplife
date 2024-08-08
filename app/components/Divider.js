import { View, StyleSheet } from "react-native"
import { theme } from "../core/theme"


export default function Divider({height}) {
    return (
        <View style={[styles.divider, {height: height}]}></View>
    )
}

const styles = StyleSheet.create({
    divider: {
        width: '100%',
        backgroundColor: theme.colors.divider,
        marginTop: 16,
        marginBottom: 16
    }
})
