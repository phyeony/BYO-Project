import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors';
import QRCode from 'react-native-qrcode-svg';

const ScanPointsScreen = ({ navigation, route }) => {
    //const { userName } = route.params

    const callback = (dataURL) => {
        console.log(dataURL);
    }

    const getDataURL = (c) => {
        console.log(c);
        // c.toDataURL(callback);

    }

    return (
        <View style={styles.container}>
            <Text style={styles.userName}>UserName</Text>
            <Text style={styles.encouragingMessage}>Good on you for saving a cup!</Text>
            <View style={styles.qrCode}>
                <QRCode 
                    value="UserIDAddPoints"
                    getRef={(c) => (getDataURL(c))}
                />
            </View>
            <Text style={styles.helpMessage}>Scan to earn Points</Text>
            <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
                <Text> Close </Text>
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
    userName: {
        top:'6%',
        fontSize: 25,
        fontWeight: 'bold',
    },
    encouragingMessage: {
        top:'10%',
        fontSize: 25,
        fontWeight: '500',
    },
    qrCode: {
        top: '25%'
    },
    helpMessage: {
        top: '43%',
        fontSize: 25,
    },
    closeButton: {
        top: '53%',
        width: "50%",
        backgroundColor: Colors.primary,
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
      
    },
});

export default ScanPointsScreen;