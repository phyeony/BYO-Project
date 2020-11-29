import { dbService } from "../Firebase";
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';




const onSubmit = (event) => {
    event.preventDefault();
    // // Add a new document in collection "rewards"
    // dbService.collection("rewards").doc("reward13").set({
    //     address: {
    //         PC: 'V6X0A8',
    //         city: 'Richmond',
    //         country: 'Canada',
    //         region: 'BC',
    //         street_name: 'Sea Island Way',
    //         street_number: '8525',
    //     },
    //     is_claimed: true,
    //     is_redeemed: false,
    //     price: 15,
    //     promo_detail: "Free Chocolate Cookie",
    //     remaining_stock: 0,
    //     total_stock: 5,
    //     store_name: "Starbucks"

    // })
    //     .then(function () {
    //         console.log("Document successfully written!");
    //     })
    //     .catch(function (error) {
    //         console.error("Error writing document: ", error);
    //     })
    // dbService.collection("rewards").doc("reward14").set({
    //     address: {
    //         PC: 'V6X0A8',
    //         city: 'Richmond',
    //         country: 'Canada',
    //         region: 'BC',
    //         street_name: 'Sea Island Way',
    //         street_number: '8525',
    //     },
    //     is_claimed: false,
    //     is_redeemed: false,
    //     price: 8,
    //     promo_detail: "15% off Grande Mocha",
    //     remaining_stock: 2,
    //     total_stock: 12,
    //     store_name: "Starbucks"

    // })
    //     .then(function () {
    //         console.log("Document successfully written!");
    //     })
    //     .catch(function (error) {
    //         console.error("Error writing document: ", error);
    //     })
    // dbService.collection("rewards").doc("reward15").set({
    //     address: {
    //         PC: 'V6X0A8',
    //         city: 'Richmond',
    //         country: 'Canada',
    //         region: 'BC',
    //         street_name: 'Sea Island Way',
    //         street_number: '8525',
    //     },
    //     is_claimed: false,
    //     is_redeemed: false,
    //     price: 5,
    //     promo_detail: "15% off Kid Hot Chocolate",
    //     remaining_stock: 9,
    //     total_stock: 10,
    //     store_name: "Starbucks"

    // })
    //     .then(function () {
    //         console.log("Document successfully written!");
    //     })
    //     .catch(function (error) {
    //         console.error("Error writing document: ", error);
    //     })




}


const AddDocuments = () => {
    return (
        <View>
            <TouchableOpacity
                style={styles.loginBtn}
                onPress={onSubmit}
            >
                <Text style={styles.loginText}>Submit</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({

    loginBtn: {
        width: "80%",
        backgroundColor: 'blue',
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
});
export default AddDocuments;