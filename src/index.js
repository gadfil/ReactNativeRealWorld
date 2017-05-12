/**
 * Created by admin on 09.05.17.
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './containers/Root';
import configureStore from './store/configureStore';

const store = configureStore();

const ReactNativeRealWorld = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent('ReactNativeRealWorld', () => ReactNativeRealWorld);
