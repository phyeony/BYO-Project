import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors';
import QRCode from 'react-native-qrcode-svg';

const ScanPageScreen = ({ navigation, route }) => {
    const { storeName, promoDetail } = route.params
    const [svg, setSvg] = useState(null);

    const callback = (dataURL) => {
        console.log(dataURL);
    }

    const getDataURL = (c) => {
        console.log(c);
        // c.toDataURL(callback);

    }



    return (
        <View style={styles.container}>
            <Text style={styles.storeName}>{storeName}</Text>
            <Text style={styles.promoDetail}>{promoDetail}</Text>
            <View style={styles.qrCode}>
                <QRCode 
                    value="Just some string value"
                    getRef={(c) => (getDataURL(c))}

                />
            </View>
            <Text style={styles.helpMessage}>Show this to the cafe staff!</Text>
            <Text style={styles.helpMessage}>or</Text>
            <TouchableOpacity style={styles.redeemLaterButton} onPress={() => navigation.goBack()}>
                <Text> Redeem Later </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    storeName: {
        marginTop: 25,
        fontSize: 25,
        fontWeight: 'bold',

    },
    promoDetail: {
        marginTop: 25,
        fontSize: 25,
        fontWeight: '500',

    },
    qrCode: {
        top: '15%'
    },
    helpMessage: {
        top: '35%',
        fontSize: 18,
    },
    redeemLaterButton: {
        top: '37%',
        width: "35%",
        backgroundColor: Colors.primary,
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
      
    },
});

export default ScanPageScreen;