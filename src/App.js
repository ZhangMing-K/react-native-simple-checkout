import React from 'react';
import { LogBox, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { StripeProvider } from '@stripe/stripe-react-native';

import RootNavigation from './navigation';
import { store, persistor } from './redux/store';

LogBox.ignoreAllLogs(); // Ignore all log notifications


const App = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1abc9c' }}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <StripeProvider
                        publishableKey={'pk_test_51KdH2kETC5qn4G9spoerDwkwexn3YfbFmsjdwyrXBmzwkd9ozpRxXs8uPsDtylSolgemXPGEvprr33ctJnEl0fwu003SPtKYDT'}
                        merchantIdentifier="merchant.identifier"
                    >
                        <RootNavigation />
                    </StripeProvider>
                </PersistGate>
            </Provider>
        </SafeAreaView>
    );
};

export default App;
