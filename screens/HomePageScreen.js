import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import Colors from '../constants/colors';

const HomePage = props => {
    return( <View>
        <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => props.navigation.navigate('Bottom Tabs')}
        >
            <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

    </View>
    );
}

const styles = StyleSheet.create({
    loginBtn: {
        width: "80%",
        backgroundColor: Colors.primary,
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
      },
      loginText: {
        color: "black",
        fontWeight: "bold",
      },

});

export default HomePage;