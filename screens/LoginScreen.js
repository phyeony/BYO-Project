import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Inputs from '../components/Input';



//export default function App()

//Set Input.js to textInputs

const Login = props => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo_with_BYO.png")}></Image>
      </View>

      <Text style={styles.logo}>Bring Your Own Cup</Text>

      <Inputs //style={styles.inputView}
      // placeholder="Username..."
      // placeholderTextColor='#003f5c'
      //onChangeText={text => setUsername(text)}
      />
      <Card style={styles.inputView} >
        <TextInput

          style={styles.inputText}
          placeholder="Username..."
          placeholderTextColor='#003f5c'
          onChangeText={text => setUsername(text)} />
      </Card>

      <Card style={styles.inputView} >
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#003f5c"
          onChangeText={text => setPassword(text)} />
      </Card>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => props.navigation.navigate('Bottom Tabs')}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>



      <View style={styles.textsContainer}>
        <TouchableOpacity>
          <Text style={styles.loginText}>Sign up</Text>
        </TouchableOpacity>
        <Text style={styles.text}> for an account |</Text>
        <TouchableOpacity>
          <Text style={styles.loginText}>    Forgot Password? </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: "bold",
    fontSize: 30,
    color: "black",
    marginBottom: 20,
    marginTop: 10
  },
  inputView: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
  },
  inputText: {
    height: 50,
    color: "black",
  },
  forgot: {
    color: "black",

  },
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
  textsContainer: {
    flexDirection: "row",
    width: "80%",
    //justifyContent: "space-between",

    paddingHorizontal: 15
  },
  text: {
    color: 'black'
  },
  logoContainer:{
    
  }

});

export default Login;