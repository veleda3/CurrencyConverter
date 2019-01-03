import React from 'react';
import { ScrollView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ClearContainer } from '../components/container';
import { ListItem, Seperator } from '../components/list';

const ICON_COLOR = '#D3D3D3';
const ICON_SIZE = 30;
const PLATFORM_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';


class Options extends React.Component {
    themePressed = () => {
        console.log('theme pressed');
        const { navigation } = this.props
        navigation.navigate('Themes');
    }

    apiCallPressed = () => {
        console.log('api call pressed');
    }

    render() {
        return(
            <ClearContainer>
                <ScrollView>
                    <ListItem 
                        item="Theme"
                        itemPressed={this.themePressed}
                        customeIcon={<Ionicons name={`${PLATFORM_PREFIX}-arrow-forward`} size={ICON_SIZE} color={ICON_COLOR} />}
                    />
                    <Seperator />
                    <ListItem 
                        item="Fixer.io"
                        itemPressed={this.apiCallPressed}
                        customeIcon={<Ionicons name={`${PLATFORM_PREFIX}-link`} size={ICON_SIZE} color={ICON_COLOR} />}
                    />
                    <Seperator />
                </ScrollView>
            </ClearContainer>
        )
    }
}

export default Options;
