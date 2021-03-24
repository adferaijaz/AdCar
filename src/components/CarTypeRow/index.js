import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles.js';

import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";


const CarTypeRow =(props) => {
    const {type} = props;

    const getImage = () => {
        if (type.type === 'Premium') {
            return require('../../assets/images/Premium.png');
        }
        if (type.type === 'Express') {
            return require('../../assets/images/Express.png');
        }
        return require('../../assets/images/Economy.png');
    }

    return(
        <View style={styles.container}>

            {/* Image */}
            <Image
                style={styles.image}
                source={getImage()}
            />

            <View style={styles.middleContainer}>
                <Text style={styles.type}>
                    {type.type}{'   '}
                </Text>

                <Text>
                    <Fontisto name={'persons'} size={15} color={'#005b96'} />
                    <Text style={styles.time}> {type.people}</Text>
                </Text>

                <Text style={styles.time}>
                    08:03 PM
                </Text>
            </View>

            <View style={styles.rightContainer}>


                <Text style={styles.price}>
                    ₹ {type.price}
                    {' '}<AntDesign name={'tags'} size={17} color={'#00b159'}/>
                </Text>


            </View>

        </View>
    );
};

export default CarTypeRow ;
