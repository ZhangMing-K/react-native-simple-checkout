import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
// import Cart from '../screens/Cart';
import Products from '../screens/Products';
import Checkout from '../screens/Checkout';
import Payment from '../screens/Payment';
import Orders from '../screens/Orders';

const Stack = createNativeStackNavigator();

const App = (props) => {
  const { theme } = props;
  return (
    <NavigationContainer theme={theme} >
      <StatusBar barStyle="light-content" />

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Orders" component={Orders} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
