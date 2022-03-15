import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/Product';

import styles from './styles';
import AppStyles from '../../constants/AppStyles';

const CheckoutScreen = ({ navigation }) => {
    const cartItems = useSelector(state => state.cartReducer.cart)

    const cartTotal = useSelector(state => state.cartReducer.total)

    return (
        <View style={AppStyles.container}>
            <View style={AppStyles.header}>
                <View style={AppStyles.fullFlex} />
                <Text style={[AppStyles.fullFlex, styles.headerText]}>Checkout</Text>
                <View>
                    <TouchableOpacity style={styles.sectionCart}>
                        <Text style={styles.cartCntText}> Your cart: {cartItems.length} {cartItems.length > 1 ? 'items' : 'item'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.announceText}>Please confirm and checkout your cart.</Text>
            <View style={styles.ckitems}>
                <FlatList
                    data={cartItems}
                    renderItem={({ item, index }) => <ProductItem product={item} index={index} />}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={() => <View style={{ height: 0.3, backgroundColor: '#34495e90' }} />}
                />
                <Text style={styles.text}>Total: $ {(cartTotal).toFixed(2)}</Text>
                <TouchableOpacity style={styles.button} disabled={cartItems.length == 0} onPress={() => {
                    navigation.navigate('Payment');
                }}>
                    <Text style={styles.checkoutText}>Proceed to payment</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CheckoutScreen;
