import React from "react";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'APIKEY';

const RouteMap = (props) => {

    const origin = {
        latitude: 34.1088661,
        longitude: 74.8092872,
    };

    const destination = {
        latitude: 34.0999961,
        longitude: 74.7999972,
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
            <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={5}
                strokeColor="black"
            />
            <Marker
                coordinate={origin}
                title={'Origin'}
            />
            <Marker
                coordinate={destination}
                title={'Destination'}
            />
        </MapView>
    );
};

export default RouteMap ;


