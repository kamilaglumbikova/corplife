import { View, Text, StyleSheet, ScrollView, Dimensions} from "react-native"
import BigTitle from "../components/BigTitle";
import ChartBlock from "../components/home/ChartBlock";
import InfoBlock from "../components/home/InfoBlock";

export default function HomeScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.containerInner}>
                <BigTitle>Übersicht</BigTitle>
                <ChartBlock />
                <InfoBlock />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    containerInner: {
        paddingHorizontal: 20,
        paddingTop: 80
    },
    
})