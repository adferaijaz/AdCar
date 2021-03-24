import React from "react";
import { View, Text, Pressable } from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {useNavigation} from "@react-navigation/native";

import styles from './styles.js'

const HomeSearch = (props) => {
    const navigation = useNavigation();

    const goToSearch = () => {
        navigation.navigate('DestinationSearch')

    }

    return (
        <View>
            {/* Input Box */}
            <Pressable onPress={goToSearch} style={styles.inputBox}>
                <Text style={styles.inputText}> Destination / منزل مقصود</Text>
                <View style={styles.timeContainer}>
                    <MaterialCommunityIcons name={'watch-export-variant'} size={18} />
                    <Text> Time</Text>
                    <MaterialIcons name={'arrow-drop-down'} size={18} />
                </View>
            </Pressable>

            {/* Previous Destination */}
            <View style= {styles.row}>
                <View style={[styles.iconContainer, {backgroundColor: '#f37736'}]}>
                    <AntDesign name={'pushpin'} size={15} color={'#fff'} />
                </View>
                <Text style={styles.destinationText}>Sanat Nagar, Srinagar</Text>
            </View>

            {/* Home Destination */}
            <View style= {styles.row}>
                <View style={[styles.iconContainer, {backgroundColor: '#139919'}]}>
                    <Ionicons name={'home'} size={15} color={'#fff'} />
                </View>
                <Text style={styles.destinationText}>K.P. Road, Anantnag</Text>
            </View>
            {/* Work Destination */}
            <View style= {styles.row}>
                <View style={[styles.iconContainer, {backgroundColor: '#4d648d'}]}>
                    <FontAwesome5 name={'laptop-house'} size={15} color={'#fff'} />
                </View>
                <Text style={styles.destinationText}>Sheikh Ul-Alam International Airport, SXR</Text>
            </View>

        </View>
    );
};

export default HomeSearch ;
