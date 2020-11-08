import React, {useState} from 'react';
import {View} from 'react-native';
import Store from './Store';

const StoresList =() => {
    const [stores, setStores] = useState([
        {
            id:1,
            storeName: 'Starbucks',
            address:'1234 ABC Street',
            isOpen: 'Open',
            phoneNumber: '(604)-123-4567'
        },
        {
            id:2,
            storeName: 'Starbucks',
            address:'1234 ABC Street',
            isOpen: 'Open',
            phoneNumber: '(604)-123-4567'
        },
        {
            id:3,
            storeName: 'Starbucks',
            address:'1234 ABC Street',
            isOpen: 'Open',
            phoneNumber: '(604)-123-4567'
        },
    ]);

    return(
        <View style={{alignItems:'center'}}>
            {stores.map(stores=>(
                <Store
                    key = {stores.id}
                    storeName = {stores.storeName}
                    address = {stores.address}
                    isOpen = {stores.isOpen}
                    phoneNumber = {stores.phoneNumber}
                />
            ))}
        </View>
    );
    

}

export default StoresList;