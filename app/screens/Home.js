import { View, Button, StyleSheet, ScrollView, SafeAreaView, Platform} from "react-native"
import BigTitle from "../components/BigTitle";
import ChartBlock from "../components/home/ChartBlock";
import InfoBlock from "../components/home/InfoBlock";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export default function HomeScreen() {
    const {userInfo} = useContext(AuthContext);
    
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView  style={styles.containerInner}>
                <View style={{flex: 1,paddingBottom: 100}}>
                    <BigTitle>Übersicht</BigTitle>
                    <ChartBlock data={userInfo.merchant_data} />
                    <InfoBlock data={userInfo.merchant_data} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingBottom: 90,
    },
    containerInner: {
        paddingHorizontal: 20,
        paddingTop: 50,
        flex: 1,
    },
    
})