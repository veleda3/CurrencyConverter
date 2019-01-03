import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';
import Themes from '../screens/Themes';

const HomeNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
        },
     },
    Options: { 
        screen: Options,
        navigationOptions: {
            headerTitle: 'Options',
        },
    },
    Themes: { 
        screen: Themes,
        navigationOptions: {
            headerTitle: 'Themes',
        },
     },
    },
    {
        headerMode: 'screen',
    }
)


export default createStackNavigator({
    Home: HomeNavigator,
    CurrencyList: { 
        screen: CurrencyList,
        navigationOptions: ({navigation}) => ({ headerTitle: navigation.state.params.title }),
     }
    },
    {
        mode: 'modal',
        headerMode: 'none',
    },
);