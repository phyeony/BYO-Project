import React, { createContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors';

const ScanPageScreen = ({ navigation, route }) => {
    const { storeName, promoDetail } = route.params


    return (
        <View style={styles.container}>
            <Text style={styles.storeName}>{storeName}</Text>
            <Text style={styles.promoDetail}>{promoDetail}</Text>
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
        fontSize: 25,
        fontWeight: '500',

    },
    helpMessage: {
        top: '50%',
        fontSize: 18,

    },
    redeemLaterButton: {
        top: '55%',
        width: "35%",
        backgroundColor: Colors.primary,
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
});

export default ScanPageScreen;