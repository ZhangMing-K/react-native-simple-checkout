import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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
    },
    myOrdersWrap: {
        alignItems: 'flex-start',
        marginLeft: 10
    },
    checkoutWrap: {
        alignItems: 'flex-end',
        marginRight: 10
    },
    checkoutText: {
        fontSize: 15,
        color: 'white'
    }
});
