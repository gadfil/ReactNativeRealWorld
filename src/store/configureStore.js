/* eslint global-require: 0 */

import Immutable from 'immutable';
import { Platform } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers'
import * as actionCreators from '../actions';
import api from '../middleware/api'

let composeEnhancers = compose;
if (__DEV__) {
  /* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
    const installDevTools = require('immutable-devtools');

    installDevTools(Immutable);

    // Use it if Remote debugging with RNDebugger, otherwise use remote-redux-devtools
  /* eslint-disable no-underscore-dangle */
    composeEnhancers = (
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
        require('remote-redux-devtools').composeWithDevTools
    )({
        name: Platform.OS,
        ...require('../../package.json').remotedev,
        actionCreators,
    });
  /* eslint-enable no-underscore-dangle */
}

const enhancer = composeEnhancers(
    applyMiddleware(thunk, api),
);

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, enhancer);
    if (module.hot) {
        module.hot.accept(() => {
            store.replaceReducer(require('../reducers').default);
        });
    }
    return store;
}
