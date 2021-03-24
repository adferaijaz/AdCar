import React from "react";
import { Image, FlatList } from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import cars from '../../assets/data/cars';

const HomeMap = (props) => {

    const getImage = (type) => {
        if (type === 'Premium') {
            return require('../../assets/images/top-Premium.png');
        }
        if (type === 'Express') {
            return require('../../assets/images/top-Express.png');
        }
        return require('../../assets/images/top-Economy.png');
    };

    return (
        <MapView
                style={{height: '100%', width: '100%'}}
                provider = {PROVIDER_GOOGLE}
                showsUserLocation={true}
                initialRegion={{
                    latitude: 34.1048661,
                    longitude: 74.8082872,
                    latitudeDelta: 0.0222,
                    longitudeDelta: 0.0121,
                }}>

            {cars.map((car) => (
                <Marker
                    key={car.id}
                    coordinate={{ latitude: car.latitude, longitude : car.longitude }}
                >
                    <Image
                        style={{
                            width: 50,
                            height: 50,
                            resizeMode: 'contain',
                            transform: [{
                                rotate: `${car.heading}deg`
                            }]

                        }}
                        source ={getImage(car.type)}
                    />
                </Marker>

            ))}
        </MapView>
    );
};

export default HomeMap ;


