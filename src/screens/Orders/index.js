import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/Product';
import items from '../../constants/items';

import styles from './styles';
import AppStyles from '../../constants/AppStyles';
import OrderItem from '../../components/Order';

const OrdersScreen = ({ navigation }) => {
    const orderItems = useSelector(state => state.orderReducer.order)

    return (
        <View style={AppStyles.container}>
            <View style={AppStyles.header}>
                <View style={AppStyles.fullFlex} />
                <Text style={[styles.headerText]}>My Orders</Text>
                <View style={AppStyles.fullFlex} />
            </View>

            <FlatList
                data={orderItems}
                renderItem={({ item }) => <OrderItem order={item} />}
                keyExtractor={(item) => item.orderId}
                ItemSeparatorComponent={() => <View style={{ height: 0.5, backgroundColor: '#34495e90' }} />} />
        </View>
    );
};

export default OrdersScreen;
