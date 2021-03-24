import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: '#d0e1f9',
        marginTop: 4,
        marginRight: 4,
        marginLeft: 4,
        padding: 9,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 60,
    },
    inputText: {
        fontSize: 21,
        fontWeight: '700',
        color: '#413838'
    },
    timeContainer: {
        flexDirection: 'row',
        width: 90,
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 9,
        borderRadius: 60,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
        marginRight: 4,
        marginLeft: 18,
        padding: 1,
        alignItems: 'center',
        borderRadius: 90,
        /*backgroundColor: '#adcbe3',*/
        borderBottomWidth: 4,
        borderColor: '#708090',
    },
    iconContainer: {
        padding: 10,
        borderRadius: 50,
        backgroundColor: '#c9cbcb',

    },
    destinationText: {
        marginLeft: 10,
        fontWeight: '700',
        fontSize: 16,
    }

});

export default styles ;
