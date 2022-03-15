import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    custForm: {
        flex: 1
    },
    ckitems: {
        flex: 1,
    },
    announce: {
        padding: 12,
        borderRadius: 5,
        backgroundColor: '#34495e90',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        color: 'red',
        marginTop: 10
    },
    announceText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 16,
        margin: 10
    },
    headerText: {
        fontSize: 20,
        color: 'white'
    },
    sectionCart: {
        flexDirection: 'row',
        marginRight: 10
    },
    cartCntText: {
        fontSize: 15,
        color: 'white'
    },
    checkoutWrap: {
        alignItems: 'center',
        marginRight: 10
    },
    checkoutText: {
        fontSize: 15,
        color: 'white'
    },
    button: {
        marginVertical: 15,
        height: 40,
        backgroundColor: '#ec5990',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center'
    }
});
