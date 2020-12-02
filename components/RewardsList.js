import React, { useState } from 'react';
import { View } from 'react-native';

import Rewards from './Rewards';

const RewardsList = (rewards) => {


    return (
        
        <View style= {{alignItems:'center'}}>
            {console.log("rewards",rewards)}
            {rewards.rewards.map((rewards,index) => (
                <Rewards
                    key={index}
                    storeName={rewards.store_name}
                    promoDetail={rewards.promo_detail}
                    remainingStock={rewards.remaining_stock}
                    totalStock={rewards.total_stock}
                    price={rewards.price}
                    isClaimed={rewards.is_claimed}
            
                />
            ))}
        </View>

    );

}



export default RewardsList;