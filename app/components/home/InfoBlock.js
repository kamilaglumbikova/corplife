import { View, StyleSheet, Text, Image } from "react-native"

import SmallTitle from "../SmallTitle"
import Divider from "../Divider"
import { theme } from "../../core/theme"
import { useEffect, useState } from "react"
import { API_URL } from '../../utils/api';

export default function InfoBlock({userData}) {
  const [dealsData, setDealsData] = useState([]);
  
  useEffect(() => {
    var data = new FormData();
    data.append("merchant_id", userData.merchant_data.merchant_id);
    data.append("limit", 999);
    fetch(`${API_URL}/voucher`, {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
      },
      body:data,
    })
    .then((response) => response.json())
    .then((responseJson) => {
      setDealsData(responseJson.deals);
    })
    .catch((error) => {
      console.error(error);
    }); 
  },[])

    return (
        <View style={styles.info}>
            <SmallTitle>Angebotsübersicht</SmallTitle>
            {dealsData?.map((deal, index) => {
              return (
              <View key={index} style={styles.dataInfo}>
                <Text style={{ width: '100%', textAlign: 'center', fontWeight: '600' }}>
                  {deal.name}
                </Text>
                <View style={{paddingHorizontal: 20}}>
                    <Divider height={1} />
                    <View style={[styles.data, { justifyContent: 'space-between', marginBottom: 10 }]}>
                        <View style={[styles.data, { gap: 10 }]}>
                            <Image source={require('../../../assets/voucher_2.png')} style={{ width: 24, height: 17, resizeMode: 'contain' }} />
                            <Text style={{ fontSize: 13 }}>Eingelöste Gutschein</Text>
                        </View>
                        <Text style={{ fontWeight: 'bold', fontSize: 13 }}>{deal.redeemed}</Text>
                    </View>
                    <View style={[styles.data, { justifyContent: 'space-between' }]}>
                        <View style={[styles.data, { gap: 10 }]}>
                            <Image source={require('../../../assets/voucher_1.png')} style={{ width: 24, height: 17, resizeMode: 'contain' }} />
                            <Text style={{ fontSize: 13 }}>Ausstehende Gutschein</Text>
                        </View>
                        <Text style={{ fontWeight: 'bold', fontSize: 13 }}>{(parseInt(deal.total_count)-parseInt(deal.redeemed))}</Text>
                    </View>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.bottomText}>
                      {deal.options.length === 0 && 'Keine Optionen'}
                      {deal.options.length !== 0 && parseInt(deal.options_count) + " Option(en)"}
                    </Text>
                </View>
            </View>
            )
            })}
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
        width: '100%',
        borderRadius: 15,
        paddingTop: 20,
    },
    data: {
        flexDirection: 'row'
    },
    bottom: {
        backgroundColor: theme.colors.primary500,
        width: '100%',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        marginTop: 20,
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    bottomText: {
        color: 'white',
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'right'
    }
})