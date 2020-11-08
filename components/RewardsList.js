import React, { useState } from 'react';
import { View } from 'react-native';

import Rewards from './Rewards';

const RewardsList = () => {

    const [rewards, setRewards] = useState([
        {
            storeName: 'Starbucks',
            promoDetails: '50% off Grande Latte',
            //isClaimAble: 'false',
            remainingStock: '2/10 remaining',
            price: '8points',
            id: 12324
        },
        {
            storeName: 'Starbucks',
            promoDetails: '50% off Grande Latte',
            //isClaimAble: 'false',
            remainingStock: '2/10 remaining',
            price: '8points',
            id: 2313
        },
        {
            storeName: 'Starbucks',
            promoDetails: '50% off Grande Latte',
            //isClaimAble: 'false',
            remainingStock: '2/10 remaining',
            price: '8123points',
            id: 1233453
        },


    ]);

    return (
        <View style= {{alignItems:'center'}}>
            {rewards.map(rewards => (
                <Rewards
                    key={rewards.id}
                    storeName={rewards.storeName}
                    promoDetails={rewards.promoDetails}
                    remainingStock={rewards.remainingStock}
                    price={rewards.price}
                />
            ))}
        </View>

    );

}



export default RewardsList;