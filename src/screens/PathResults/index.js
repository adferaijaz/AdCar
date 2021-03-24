import React from 'react';
import { View, Dimensions } from 'react-native';
import RouteMap from '../../components/RouteMap';
import CarTypes from '../../components/CarTypes';

import { useRoute } from '@react-navigation/native';

const PathResults = (props) => {
    const route = useRoute();

    console.log(route.params);

    return(
        <View style={{display: 'flex', justifyContent: 'space-between'}}>
            <View style={{height: Dimensions.get('window').height - 340}}>
                <RouteMap />
            </View>

            <View style={{height: 340, backgroundColor: '#e7eff6'}}>
              <CarTypes />
            </View>

        </View>
    );
};

export default PathResults ;
