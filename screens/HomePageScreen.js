import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import Colors from '../constants/colors';
import Card from '../components/Card';

const HomePage = props => {
    return (
        <View style={styles.container}>
            <ScrollView>
                    <TouchableOpacity style={styles.rewardsView} >
                        <Text style={styles.scanText}>Reward Library</Text>
                    </TouchableOpacity>
           
                <View style={styles.cardContainer}>
                    <Card style={styles.card} >
                        <Text>Your Impact</Text>
                    </Card>
                    <Card style={styles.card} >
                        <Text>
                            Number of trees planted:
                        </Text>
                    </Card>
                    <Card style={styles.card} >
                        <Text>
                            Stores
                         </Text>
                    </Card>

                </View>

            </ScrollView>
            <View style={styles.scanContainer}>
                <TouchableOpacity style={styles.scanBtn}>
                    <Text style={styles.scanText}>SCAN</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
     
        justifyContent: 'center',
      },
    scanBtn: {
        width: "30%",
        backgroundColor: Colors.primary,
        borderRadius: 20,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    scanText: {
        color: "black",
        fontWeight: "bold",
    },
    scanContainer: {
        alignItems: "flex-end",
        padding: 20
    },
    rewardsView: {
        width: "100%",
        height: 30,
        alignItems: "flex-start",
        justifyContent: "center",
        padding: 20
    },
    card: {
        height: 200,
        marginTop: 20,
        marginBottom: 30,
        width: "80%",
        borderRadius: 20,
    },
    cardContainer: {
        alignItems: "center"
    }

});

export default HomePage;