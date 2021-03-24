import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: -10,
        borderRadius: 15,
        backgroundColor: '#adcbe3',
        margin: 5,

    },
    image: {
        height: 80,
        width: 80,
        resizeMode: 'contain',

    },
    middleContainer: {
        flex: 1,
        marginHorizontal: 10,


    },
    type: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 3,

    },
    time: {
        color: '#03396c',

    },
    rightContainer: {
        width: 120,
        justifyContent: 'space-around',
        flexDirection: 'row',



    },
    price: {
        fontWeight: 'bold',
        fontSize: 23,


    },

});

export default styles;
