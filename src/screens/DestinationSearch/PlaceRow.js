import React from 'react';
import { View, Text } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Entypo from "react-native-vector-icons/Entypo";
import styles from './styles';


const PlaceRow = (data) => {
    return(
        <View style={styles.row}>
            <View style={styles.iconContainer}>
                {data.description === 'Home'
                    ? <Octicons name='home' size={20} color={'#139919'}  />
                    : <MaterialIcons name='add-location-alt' size={20} color={'#f37736'} />
                }

            </View>
            <Text style={styles.locationText}>{data.description || data.vicinity}</Text>
        </View>
    );
};

export default PlaceRow;
