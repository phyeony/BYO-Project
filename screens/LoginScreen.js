import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image
} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Inputs from '../components/Input';
import { Firebase } from '../Firebase';
import { TextInput } from 'react-native-paper';

import mainContext from '../context/mainContext';

const Login = props => {
  const { handleLogin } = useContext(mainContext);

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require("../assets/logo_with_BYO.png")}></Image>
        </View>

        <Text style={styles.logo}>Bring Your Own Cup</Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email address"
            onChangeText={(email) => setEmail(email)}
            value={email}
            label="Email"
            keyboardType={'email-address'}
            mode="outlined"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Password"
            onChangeText={(password) => setPassword(password)}
            value={password}
            secureTextEntry={true}
            label="Password"
            mode="outlined"
          />
        </View>
        {/* <Card style={styles.inputView} >
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
      </Card> */}

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => handleLogin(email, password)}
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
    </TouchableWithoutFeedback>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
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
  logoContainer: {

  }

});

export default Login;