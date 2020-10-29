import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { Button } from 'react-native-paper';
import Colors from '../constants/colors';
import Card from '../components/Card';


const HomePage = props => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.cupView}>
                    <Image  source={require("../assets/coffeeCupImg.png")}></Image>
                </View>

                <TouchableOpacity style={styles.rewardsView} >
                    <Text style={styles.Text}>Reward Library >> </Text>
                </TouchableOpacity>

                <View style={styles.cardContainer}>
                    <Card style={styles.card} >
                        <Text style={styles.Text}>
                            Your Impact</Text>
                    </Card>
                    <Card style={styles.card} >
                        <Text style={styles.Text}>
                            Number of trees planted:
                        </Text>
                    </Card>
                    <Card style={styles.card} >
                        <Text style={styles.Text}>
                            Stores
                         </Text>
                    </Card>

                </View>

            </ScrollView>

            <TouchableOpacity style={styles.scanBtn}>
                <Text style={styles.scanText}>SCAN</Text>
            </TouchableOpacity>

        </View>
    );
}
//TODO: Change scan positioning

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',

    },
    scanBtn: {
        position: "absolute",
        top: 500,
        left: 260,

        width: "30%",
        backgroundColor: Colors.primary,
        borderRadius: 20,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    Text: {
        color: "black",
        fontWeight: "bold",
        fontSize: 20
    },
    rewardsView: {
        width: "100%",
        height: 30,
        alignItems: "flex-start",
        justifyContent: "center",
        padding: 20,
        flex: 1
    },
    card: {
        height: 200,
        marginTop: 20,
        marginBottom: 30,
        width: "90%",
        borderRadius: 20,
    },
    cardContainer: {
        alignItems: "center",


    },
    cupView: {
        flex: 1,
        height: 200,
        backgroundColor: 'rgba(255, 192, 97, 0.3)',
        justifyContent: 'center',
        alignItems: 'center'

    },
   

});

export default HomePage;