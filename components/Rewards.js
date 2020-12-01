import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import Card from './Card';
import Colors from '../constants/colors';

const Rewards = (props) => {
    const [userPoint, setUserPoints] = useState(5);

    const createClaimConfirmAlert = () =>
        Alert.alert(
            "Claim Reward",
            "Would you like to claim this reward?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Claim",
                    onPress: () => {
                        if (userPoint < props.price) {
                            console.log('not enough points');
                        } else {
                            console.log('enough points!')
                            //wrtie userpoints in firestore
                        }
                        //TODO: get user's points and compare with the price
                    }
                }
            ],
            { cancelable: false }
        );
    const createRedeemConfirmAlert = () =>
        Alert.alert(
            "Redeem Reward",
            "Would you like to redeem this reward?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Redeem",
                    onPress: () => {
                        //TODO: is redeemed to true
                    }
                }
            ],
            { cancelable: false }
        );

    return (
        <Card style={styles.card} >
            <Text style={styles.storeNameText}>{props.storeName}</Text>
            <Text style={styles.promotionDetailText}>{props.promoDetail}</Text>
            <View style={styles.claimContainer}>
                {props.isClaimed ?
                    <TouchableOpacity onPress={createRedeemConfirmAlert} style={{ marginRight: 10 }}>
                        <Text style={styles.claimText}>Redeem</Text>
                    </TouchableOpacity> : ((userPoint < props.price) ? <Text style={styles.notEnoughPointsText}>Claim</Text>
                        :
                        <TouchableOpacity onPress={createClaimConfirmAlert} style={{ marginRight: 10 }}>
                            <Text style={styles.claimText}>Claim</Text>
                        </TouchableOpacity>
                    )
                }
                <Text style={styles.stockText}>{props.remainingStock}/{props.totalStock}{' '}remaining</Text>
                <Text style={styles.priceText}>{props.price}{' '}points</Text>
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
        flex: 1,
    },
    
    notEnoughPointsText: {
        color: 'grey',
        fontSize: 19,
        flex: 1,
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
