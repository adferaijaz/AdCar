import React from 'react';
import { View, Text,Pressable } from 'react-native';
import styles from './styles.js';
import CarTypeRow from '../CarTypeRow';

import typesData from '../../assets/data/types';

const CarTypes = (props) => {
    const confirm = () => {
        console.warn('confirm');
    };

    return(
        <View>
            {typesData.map((type) => (
                <CarTypeRow type={type} key={type.id} />
            ))}

            <Pressable onPress={confirm} style={{

                backgroundColor: 'black',
                padding: 20,
                margin: 5,
                alignItems: 'center',
                borderRadius: 15,
            }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                    Confirm Cab
                </Text>
            </Pressable>



        </View>
    );
};

export default CarTypes ;
