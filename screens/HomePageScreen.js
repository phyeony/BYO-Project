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
                    <View style={{marginLeft: 20}}>
                        <View style={styles.textContainer}>
                            <Text style={styles.numberOfCupsLeft}>4</Text>
                            <Image style={styles.cupStyle} source={require("../assets/water_cup.png")}></Image>
                        </View>
                        <Text style={{fontSize: 20, fontWeight:'900',marginLeft: 10}}>Until Next Tree</Text>
                        <Text style={{color: '#8CC63F',fontSize: 15, fontWeight:'500',marginLeft: 10}}>You've planted 3 trees so far!</Text>
                    </View>
                    <Image style={styles.treeStyle} source={require("../assets/tree_img.png")}></Image>

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
    treeStyle: {
        marginRight: 30
        
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