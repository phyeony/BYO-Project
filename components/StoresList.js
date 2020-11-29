import React, {useState} from 'react';
import {View} from 'react-native';
import Store from './Store';

const StoresList =(stores) => {
    
  
    return(
       
        <View style={{alignItems:'center'}}>
           {console.log("stores in ScrollView", stores) }
            {stores.stores.map((store,index)=>(
                <Store
                    key = {index}
                    storeName = {store.name}
                    address = {null}
                    isOpen = {store.is_open}
                    phoneNumber = {store.phone_number}
                />
            ))}
        </View>
    );
    

}

export default StoresList;