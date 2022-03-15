import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/Product';
import items from '../../constants/items';

import styles from './styles';
import AppStyles from '../../constants/AppStyles';

const ProductsScreen = ({ navigation }) => {
    const cartItems = useSelector(state => state.cartReducer.cart)
    const orderItems = useSelector(state => state.orderReducer.order)

    const toMyOrders = () => {
        console.log('to my orders page')
        navigation.navigate('Orders');
    }

    const toCheckout = () => {
        navigation.navigate('Checkout');
    }

    return (
        <View style={AppStyles.container}>
            <View style={styles.header}>
                <View style={AppStyles.fullFlex} >
                    {
                        orderItems.length > 0 &&
                        <TouchableOpacity style={styles.myOrdersWrap} onPress={() => toMyOrders()}>
                            <Text style={styles.checkoutText}>My orders</Text>
                        </TouchableOpacity>
                    }
                </View>
                <Text style={[styles.headerText]}>Products</Text>
                <View style={AppStyles.fullFlex}>
                    {
                        cartItems.length > 0 &&
                        <TouchableOpacity style={styles.checkoutWrap} onPress={() => toCheckout()}>
                            <Text style={styles.checkoutText}>Checkout</Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>

            <FlatList
                data={items.books}
                renderItem={({ item }) => <ProductItem product={item} />}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <View style={{ height: 0.5, backgroundColor: '#34495e90' }} />} />
        </View>
    );
};

export default ProductsScreen;
