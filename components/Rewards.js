import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './Card';
import Colors from '../constants/colors';

const Rewards = (props) => {

    return (
        <Card style={styles.card} >
            <Text style={styles.storeNameText}>{props.storeName}</Text>
            <Text style={styles.promotionDetailText}>{props.promoDetail}</Text>
            <View style={styles.claimContainer}>
                <Text style={styles.claimText}>Claim</Text>
                <Text style={styles.stockText}>{props.remainingStock}</Text>
                <Text style={styles.priceText}>{props.price}</Text>
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

    promotionDetailText: {
        color: "black",
        fontSize: 15,
        marginBottom: 10,
        flex: 1
    },

    claimText: {
        color: Colors.primary,
        fontSize: 19,
        flex: 1
    },

    stockText: {
        color: 'black',
        fontSize: 14,
        flex: 3,
        marginTop: 3,
    },

    priceText: {
        color: 'black',
        fontSize: 24,
        height: 30,
    },

    claimContainer: {
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

export default Rewards;
