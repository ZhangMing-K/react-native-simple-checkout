import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#0e101c',
    },
    headerText: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white'
    },
    announceText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        marginVertical: 10
    },
    textField: {
        backgroundColor: 'white',
        borderColor: 'transparent',
        height: 40,
        padding: 10,
        marginVertical: 10,
        borderRadius: 4,
    },
    errorText: {
        color: 'red',
        textAlign: 'center'
    },
    button: {
        marginVertical: 15,
        height: 40,
        backgroundColor: '#ec5990',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white'
    }
});


