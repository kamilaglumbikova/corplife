import { View, Text, StyleSheet, ScrollView, SafeAreaView, Pressable } from "react-native"
import BigTitle from "../components/BigTitle";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { theme } from "../core/theme";

export default function AccountScreen() {
    const { userInfo,logout } = useContext(AuthContext);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.containerInner}>
                <View style={{ flex: 1, paddingBottom: 100 }}>
                    <BigTitle>Einstellungen</BigTitle>
                    <View style={styles.grayBlock}>
                        <Text style={styles.grayBlockText}>Maine Daten</Text>
                        <View style={[styles.grayBlockContainer, {paddingHorizontal: 20}]}>
                            <Text style={styles.name}>
                                {`${userInfo.data.firstname} ${userInfo.data.lastname}`}
                            </Text>
                            <Text style={styles.email}>{userInfo.data.email}</Text>
                        </View>
                    </View>
                    <View style={styles.grayBlock}>
                        <Text style={styles.grayBlockText}>Kontaktiere uns</Text>
                        <View style={[styles.grayBlockContainer, {paddingHorizontal: 20}]}>
                            <Text>
                                Wenn du Fragen hast oder weitere
                                Unterstützung benötigst, schicke uns bitte jederzeit 
                                eine E-Mail an pm@corplige.at.
                            </Text>
                        </View>
                    </View>
                    <View style={styles.grayBlock}>
                        <Text style={styles.grayBlockText}>Rechtliches</Text>
                        <View style={styles.grayBlockContainer}>
                            <Pressable style={styles.pressableBlock} onPress={() => {}}>
                                <Text style={styles.blue}>Datenschutz</Text>
                            </Pressable>
                            <Pressable style={styles.pressableBlock} onPress={() => {}}>
                                <Text style={styles.blue}>AGB</Text>
                            </Pressable>
                            <Pressable style={{paddingLeft: 20}} onPress={() => {}}>
                                <Text style={styles.blue}>Impressum</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.grayBlock}>
                        <Text style={styles.grayBlockText}>Anmeldung</Text>
                        <View style={styles.grayBlockContainer}>
                            <Pressable style={{paddingLeft: 20}} onPress={logout}>
                                <Text style={styles.logout}>Abmelden</Text>
                            </Pressable>
                        </View>
                    </View>
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
    grayBlockContainer: {
        backgroundColor: theme.colors.gray,
        borderRadius: 15,
        paddingVertical: 15,
        marginTop: 14
    },
    grayBlockText: {
        color: theme.colors.gray200,
        textTransform: 'uppercase',
        fontWeight: '500',
        fontSize: 13
    },
    grayBlock: {
        marginTop: 30
    },
    logout: {
        fontSize: 19,
        color: theme.colors.primary500
    },
    blue: {
        fontSize: 19,
        color: theme.colors.blueText
    },
    pressableBlock: {
        paddingBottom: 10,
        marginBottom: 10,
        borderBottomColor: theme.colors.redText,
        borderBottomWidth: 1,
        paddingLeft: 20
    },
    name:{
        fontSize: 23
    },
    email: {
        marginTop: 5
    }
})