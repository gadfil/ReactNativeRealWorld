import {StackNavigator} from 'react-navigation';

import App from './containers/App';
import Counter from './containers/Counter';
import UserPage from './containers/UserPage';

const AppNavigator = new StackNavigator(
    {
        App: {screen: App},
        UserPage: {screen: UserPage},
        Counter: {screen: Counter}
    },
    {
        headerMode: 'screen',
        navigationOptions: {
            header: null
        }
    }
);

export default AppNavigator;
