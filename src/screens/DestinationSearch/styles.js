import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 12,
        height: '100%',

    },
    textInput: {
        height: 50,
        backgroundColor: '#adcbe3',
        marginVertical: 5,
        padding: 10,
        borderRadius: 12,
        fontWeight: 'bold',
        color: '#000000',
        marginLeft: 20,
    },
    separator: {
        backgroundColor: '#E0E0E0',
        height: 1,
    },
    listView: {
        position: 'absolute',
        top: 105,
    },
    autocompleteContainer: {
        position: 'absolute',
        top: 0,
        left: 10,
        right: 10,
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,


    },
    iconContainer: {
        backgroundColor: '#D0D3D4',
        padding: 5,
        borderRadius: 50,
        marginRight: 15,
    },
    locationText: {
        marginVertical: 15,

    },
    circle: {
        width: 6,
        height: 6,
        backgroundColor: 'black',
        position: 'absolute',
        top: 20,
        left: 16,
        borderRadius: 5,

    },
    line: {
        width: 1,
        height: 60,
        backgroundColor: '#90A4AE',
        position: 'absolute',
        top: 26,
        left: 18.5,

    },
    square: {
        width: 10,
        height: 10,
        backgroundColor: 'black',
        position: 'absolute',
        top: 80,
        left: 14,

    },

});

export default styles;
