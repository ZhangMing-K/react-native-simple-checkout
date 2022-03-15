import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCartRequest, removeItemFromCartRequest } from '../../redux/modules/cart/actions'
import ProductItem from '../Product';
import styles from './styles';

const OrderItem = ({ order }) => {
    const orderItems = useSelector(state => state.orderReducer.order)

    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Order Id: {order.orderId}</Text>
            <Text style={styles.text}>Customer information</Text>
            <Text style={styles.text}>First Name: {order.customer.firstName}</Text>
            <Text style={styles.text}>Last Name: {order.customer.lastName}</Text>
            <Text style={styles.text}>Email: {order.customer.email}</Text>
            <Text style={styles.text}>Address: {order.customer.address}</Text>
            <Text style={styles.text}>Items: {order.items.length}</Text>
            <FlatList
                data={order.items}
                renderItem={({ item }) => <ProductItem product={item} canAdd={false} />}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <View style={{ height: 0.5, backgroundColor: '#34495e90' }} />} />
            {/* <Image source={product.picture} style={styles.productPicture} />
            <View style={styles.productDes}>
                <Text style={styles.text}>{product.title}</Text>
                <Text style={styles.text}>${(product.cost).toFixed(2)}</Text>
                <Text style={styles.text}>{product.author}</Text>
                <TouchableOpacity onPress={addToCart} style={[styles.addBtn, {
                    backgroundColor: productAlreadyInCart ? 'red' : '#1abc8c',
                }]}>
                    <Text style={styles.text}>{!productAlreadyInCart ? 'Add to cart' : 'Remove from cart'}</Text>
                </TouchableOpacity>
            </View> */}
        </View>
    )
}

export default OrderItem;