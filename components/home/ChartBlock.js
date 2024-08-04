import { View, StyleSheet, Dimensions, Text } from "react-native"
import {
    PieChart,
} from "react-native-chart-kit";


import SmallTitle from "../SmallTitle"

const screenWidth = Dimensions.get("window").width;
const data = [
    {
        name: "Seoul",
        population: 21500000,
        color: "#fe3006",
        legendFontColor: "#fe3006",
        legendFontSize: 15
    },
    {
        name: "Toronto",
        population: 2800000,
        color: "#fe836a",
        legendFontColor: "#fe836a",
        legendFontSize: 15
    }
];
const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
};

export default function ChartBlock() {
    return (
        <View style={styles.info}>
            <SmallTitle>Gesamtanzahl</SmallTitle>
            <View style={styles.dataInfo}>
                <View style={styles.chartInfo}>
                    <Text>Anzahl der vekauften Gutschein</Text>
                </View>
                <View style={styles.chart}>
                    <PieChart
                        data={data}
                        width={screenWidth}
                        height={140}
                        chartConfig={chartConfig}
                        accessor={"population"}
                        backgroundColor={"transparent"}
                        center={[0, 0]}
                        absolute
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
        backgroundColor: '#f2f2f2',
        marginTop: 25,
        width: '100%',
        borderRadius: 15,
        flexDirection: 'row',
        padding: 20,
    },
    chartInfo: {
        flex: 1,
        marginRight: 5
    },
    chart: {
        width: 140,
        height: 140
    }
})