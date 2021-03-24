import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const CovidMessage = (props) => {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>COVID-19 Precautions!
              </Text>
            <Text style={styles.text}>
                Please observe all the guidelines related to COVID-19 for your and our saftey. </Text>
            <Text style={styles.text}>
                بَراھے کرم اپنی اور ہماری حفاظت کے لئے کووڑـ۱۹ سے متعلق تمام رہنما خطوط پر عمل کریں </Text>
            <Text style={styles.learnMore}>Learn More</Text>

        </View>
    );
};

export default CovidMessage ;
