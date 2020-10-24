import React from 'react';
import {TextInput , StyleSheet} from 'react-native';

const Input = props => {
    return <TextInput {...props} style={{ ...sytles.input,...props.style }} /> 

}

const sytles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        
        // borderBottomColor: 'grey',
        

        //marginVertical: 5,

    }
});

export default Input;