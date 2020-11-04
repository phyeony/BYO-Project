import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors';
import Card from './Card';

const Store = (props) => {

    return (
        <Card style={styles.card} >
            <Text style={styles.storeNameText}>{props.storeName}</Text>
            <Text style={styles.address}>{props.address}</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.isOpen}>{props.isOpen}</Text>
                <Text style={styles.phoneNumber}>{props.phoneNumber}</Text>
            </View>
        </Card>
    );


}

const styles = StyleSheet.create({
    storeNameText: {
        color: "black",
        fontWeight: "bold",
        fontSize: 20,
        flex: 1.3
    },
    address: {
        color: "black",
        fontSize: 15,
        marginBottom: 10,
        flex: 1
    },
    isOpen: {
        color: Colors.primary,
        fontSize: 19,
        flex: 1,
    },
    phoneNumber: {
        color: 'black',
        fontSize: 14,
        flex: 3,
        marginTop: 3,

    },
    infoContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: "flex-end"
    },
    card: {
        height: 125,
        marginTop: 10,
        marginBottom: 10,
        width: "90%",
        borderRadius: 20,
    },

});

export default Store;        