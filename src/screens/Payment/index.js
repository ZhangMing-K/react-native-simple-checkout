import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Root, Popup, Toast } from 'react-native-popup-confirm-toast'
import { CardField, useStripe } from '@stripe/stripe-react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import uuid from 'react-native-uuid';
import { addOrderRequest } from '../../redux/modules/order/actions';
import { emptyCartRequest } from '../../redux/modules/cart/actions';
import styles from './styles'
import AppStyles from '../../constants/AppStyles';
import { emailRegex } from '../../utils/validationUtils';

export default function PaymentScreen({ navigation }) {
    const { confirmPayment } = useStripe();
    const [cardDetails, setCardDetails] = useState({});
    const [validateCard, setValidateCard] = useState(false);
    const cartTotal = useSelector(state => state.cartReducer.total)

    const cartItems = useSelector(state => state.cartReducer.cart);
    const prevOrders = useSelector(state => state.orderReducer.order);
    const prevOrder = prevOrders.length > 0 ? prevOrders[prevOrders.length - 1] : {};
    const dispatch = useDispatch();
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: prevOrder.customer?.firstName ?? '',
            lastName: prevOrder.customer?.lastName ?? '',
            email: prevOrder.customer?.email ?? '',
            address: prevOrder.customer?.address ?? '',
        }
    });
    const onSubmit = data => {
        setValidateCard(true);
        if (cardDetails.complete) {
            Popup.show({
                type: 'confirm',
                title: 'Payment',
                textBody: `Are you sure want to proceed ? You will be charged \$${cartTotal.toFixed(2)}`,
                buttonText: 'Yes',
                confirmText: 'Cancel',
                callback: () => {
                    Popup.hide();
                    Toast.show({
                        title: 'Congrats!',
                        text: 'Your order has been successful !',
                        timing: 2000
                    })
                    setTimeout(() => {
                        dispatch(emptyCartRequest());
                        const orderId = uuid.v4();
                        dispatch(addOrderRequest({ cartItems: cartItems, customer: data, orderId }));
                        navigation.navigate('Products');
                    }, 2000);

                },
                cancelIdleCallback: () => {
                    Popup.hide();
                }
            })

        }

    };
    return (
        <Root>
            <View style={styles.container}>
                <View style={AppStyles.header}>
                    <Text style={[AppStyles.fullFlex, styles.headerText]}>Payment</Text>
                </View>
                <View style={{ width: '100%', flex: 1, padding: 10 }}>
                    <Text style={styles.announceText}>Please provide your shipping and card details.</Text>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.textField}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder="First Name"
                            />
                        )}
                        name="firstName"
                    />
                    {errors.firstName && <Text style={styles.errorText}>FirstName is required.</Text>}

                    <Controller
                        control={control}
                        rules={{
                            maxLength: 100,
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.textField}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder="Last Name"
                            />
                        )}
                        name="lastName"
                    />
                    {errors.lastName && <Text style={styles.errorText}>LastName is required.</Text>}

                    <Controller
                        control={control}
                        rules={{
                            maxLength: 100,
                            required: true,
                            pattern: {
                                value: emailRegex,
                                message: "Invalid email address"
                            }
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.textField}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder="Email"
                            />
                        )}
                        name="email"
                    />
                    {errors.email && <Text style={styles.errorText}> {errors.email.message !== '' ? errors.email.message : 'Email is required.'}</Text>}

                    <Controller
                        control={control}
                        rules={{
                            maxLength: 100,
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.textField}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder="Address"
                            />
                        )}
                        name="address"
                    />
                    {errors.address && <Text style={styles.errorText}>Address is required.</Text>}
                    <CardField
                        postalCodeEnabled={true}
                        placeholder={{
                            number: '4242 4242 4242 4242',
                        }}
                        cardStyle={{
                            backgroundColor: '#FFFFFF',
                            textColor: '#000000',
                        }}
                        style={{
                            width: '100%',
                            height: 50,
                            marginVertical: 15,
                        }}
                        onCardChange={(details) => {
                            setCardDetails(details);
                            if (validateCard) {
                                setValidateCard(false);
                            }
                        }}
                    />
                    {validateCard && cardDetails.complete == null && <Text style={styles.errorText}>Please enter your card details.</Text>}
                    {validateCard && cardDetails.validNumber === 'Incomplete' && <Text style={styles.errorText}>Complete Card Number.</Text>}
                    {validateCard && cardDetails.validNumber === 'Invalid' && <Text style={styles.errorText}>Card Number is invalid.</Text>}
                    {validateCard && cardDetails.validExpiryDate === 'Invalid' && <Text style={styles.errorText}>Expiry date is invalid.</Text>}
                    <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Root>

    );

}