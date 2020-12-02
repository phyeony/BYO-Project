import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { Button } from 'react-native-paper';
import Colors from '../constants/colors';
import Card from '../components/Card';


const HomePage = props => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.firstView}>
                    <View style={{ marginLeft: 20 }}>
                        <View style={styles.textContainer}>
                            <Text style={styles.numberOfCupsLeft}>4</Text>
                            <Image style={styles.cupStyle} source={require("../assets/water_cup.png")}></Image>
                        </View>
                        <Text style={{ fontSize: 20, fontWeight: '900', marginLeft: 10 }}>Until Next Tree</Text>
                        <Text style={{ color: '#8CC63F', fontSize: 15, fontWeight: '500', marginLeft: 10 }}>You've planted 3 trees so far!</Text>
                    </View>
                    <Image style={{ marginRight: 30 }} source={require("../assets/tree_img.png")}></Image>

                </View>

                <TouchableOpacity style={styles.rewardsView} >
                    <Text style={styles.Text}>Reward Library >> </Text>
                </TouchableOpacity>

                <View style={{ alignItems: 'center' }}>
                    <Card style={styles.card} >
                        <Image source={require("../assets/yourImpactCard.png")}></Image>
                        <Text style={styles.Text}>
                            Your Impact
                        </Text>
                        <Text style={{ color: '#8CC63F', fontSize: 15, fontWeight: '500' }}>
                            You've saved 6cups!
                        </Text>
                    </Card>
                    <Card style={styles.card} >
                        <View style={styles.textContainer}>
                            <Image style={{ marginLeft: 10 }} source={require("../assets/trees.png")}></Image>
                            <Image style={styles.byoImpactCup} source={require("../assets/singleCup.png")}></Image>
                        </View>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ marginLeft: 20 }}>51 Trees Planted</Text>
                            <Text style={{ marginLeft: 85 }}>99 Cups Saved</Text>
                        </View>
                        <Text style={styles.Text}>
                            BYO's Impact
                        </Text>
                        <Text style={{ color: '#8CC63F', fontSize: 15, fontWeight: '500' }}>
                            Hurray for collective impact!
                        </Text>
                    </Card>
                    <Card style={styles.card} >
                        <Text style={styles.Text}>
                            Stores
                         </Text>
                    </Card>

                </View>

            </ScrollView>

            <TouchableOpacity
                style={styles.scanBtn}
                onPress={()=>props.navigation.navigate("ScanPoints")}>
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
        top: "85 %",
        left: "65%",
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
        height: 215,
        marginTop: 20,
        marginBottom: 30,
        width: "90%",
        borderRadius: 20,
    },

    firstView: {
        flex: 1,
        flexDirection: 'row',
        height: 200,
        backgroundColor: 'rgba(255, 192, 97, 0.3)',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContainer: {
        flexDirection: 'row',
        height: 100
    },
    byoImpactCup: {
        width: 100,
        marginLeft: 60
    },
    numberOfCupsLeft: {
        fontSize: 55,
        marginLeft: 10
    },
    cupStyle: {
        height: 90,
        width: 42,
        marginLeft: 13
    }

});

export default HomePage;