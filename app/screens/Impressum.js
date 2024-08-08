import { useEffect, useState } from "react";
import { View, StyleSheet, Text,SafeAreaView,ScrollView, ActivityIndicator } from 'react-native';
import HTMLView from 'react-native-htmlview';
import BigTitle from "../components/BigTitle";
import { API_URL } from "../utils/api";

export default function ImpressumScreen() {
    const [content, setContent] = useState();

    useEffect(() => {
        const url = `${API_URL}/cmspage/40`;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setContent(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    if(!content) {
        return <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><ActivityIndicator /></View>
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.containerInner}>
                <View style={{ flex: 1, paddingBottom: 130 }}>
                    <BigTitle>{content.title}</BigTitle>
                    <HTMLView value={content.content} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    containerInner: {
        paddingHorizontal: 20,
        paddingTop: 50,
        flex: 1,
    },
});