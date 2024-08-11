import { View, StyleSheet, Dimensions, Text } from "react-native"
import {
    PieChart,
} from "react-native-chart-kit";


import SmallTitle from "../SmallTitle"
import { theme } from "../../core/theme";

const screenWidth = Dimensions.get("window").width;

export default function ChartBlock({data}) {
    const dataChart = [
        {
            name: "",
            population: parseInt(data.pending_vouchers),
            color: theme.colors.primary500,
            legendFontColor: "white",
            legendFontSize: 15
        },
        {
            name: "",
            population: (parseInt(data.total_vouchers)-parseInt(data.pending_vouchers)),
            color: theme.colors.primary400,
            legendFontColor: "white",
            legendFontSize: 15
        }
    ];
    
    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2,
        barPercentage: 0.5,
        useShadowColorFromDataset: false 
    };
    return (
        <View style={styles.info}>
            <SmallTitle>Gesamtanzahl</SmallTitle>
            <View style={styles.dataInfo}>
                <View style={styles.chartInfo}>
                    <Text>Anzahl der vekauften Gutschein</Text>
                    <Text style={styles.totals}>{data.total_vouchers}</Text>
                    <View style={styles.chartSeparator}></View>
                    <View style={styles.chartInfoData}>
                        <View style={styles.chartInfoDataEin}></View>
                        <Text style={styles.chartInfoDataText}>Eingelöste Gutscheine</Text>
                    </View>
                    <View style={styles.chartInfoData}>
                        <View style={styles.chartInfoDataAus}></View>
                        <Text style={styles.chartInfoDataText}>Ausstehende Gutscheine</Text>
                    </View>
                </View>
                <View style={styles.chart}>
                    <PieChart
                        data={dataChart}
                        width={300}
                        height={140}
                        chartConfig={chartConfig}
                        accessor={"population"}
                        backgroundColor={"transparent"}
                        center={[0, 0]}
                        hasLegend={false}
                    />
                </View>
            </View>
            
        </View>

    )
}

const styles = StyleSheet.create({
    info: {
        marginTop: 30
    },
    dataInfo: {
        backgroundColor: theme.colors.gray,
        marginTop: 25,
        flex:1,
        borderRadius: 20,
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 20,
    },
    chartInfo: {
        flex: 1
    },
    chart: {
        width: 140,
        height: 140,
        position: 'relative'
    },
    chartInfoData: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginTop:4
    },
    chartInfoDataEin: {
        width: 8,
        height: 8,
        backgroundColor: theme.colors.primary400,
        borderRadius: 8
    },
    chartInfoDataAus: {
        width: 8,
        height: 8,
        backgroundColor: theme.colors.primary500,
        borderRadius: 8
    },
    chartInfoDataText: {
        fontSize: 12
    },
    chartSeparator: {
        backgroundColor: theme.colors.divider,
        height: 1,
        width: '100%',
        marginTop: 15,
        marginBottom: 15,
        marginLeft: -20
    },
    totals: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 10
    }
})