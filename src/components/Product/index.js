import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCartRequest, removeItemFromCartRequest } from '../../redux/modules/cart/actions'
import styles from './styles';

const ProductItem = ({ product, canAdd = true }) => {
    const cartItems = useSelector(state => state.cartReducer.cart)

    const dispatch = useDispatch();
    const productAlreadyInCart = cartItems.filter((item) => item.id === product.id).length > 0;

    const addToCart = () => {
        if (!productAlreadyInCart) {
            dispatch(addItemToCartRequest(product));
        } else {
            dispatch(removeItemFromCartRequest(product));
        }
    }


    return (
        <View style={styles.container}>
            <Image source={product.picture} style={styles.productPicture} />
            <View style={styles.productDes}>
                <Text style={styles.text}>{product.title}</Text>
                <Text style={styles.text}>${(product.cost).toFixed(2)}</Text>
                <Text style={styles.text}>{product.author}</Text>
                {
                    canAdd && <TouchableOpacity onPress={addToCart} style={[styles.addBtn, {
                        backgroundColor: productAlreadyInCart ? 'red' : '#1abc8c',
                    }]}>
                        <Text style={styles.text}>{!productAlreadyInCart ? 'Add to cart' : 'Remove from cart'}</Text>
                    </TouchableOpacity>
                }

            </View>
        </View>
    )
}

export default ProductItem;