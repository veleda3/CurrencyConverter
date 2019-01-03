import React from 'react';
import { ScrollView } from 'react-native';
import EstyleSheet from 'react-native-extended-stylesheet';
import { ListItem, Seperator } from '../components/list';
import { ClearContainer } from '../components/container';

const styles = {
    $blue: '#4F6D7A',
    $orange: '#D57A66',
    $green: '#00BD9D',
    $purple: '#9E768F',
}

class Themes extends React.Component {


    handleThemePick = (themeColor) => {
        console.log(`seleted ${themeColor} theme`)
        const { navigation } = this.props
        navigation.goBack()
    }

    render() {
        return (
            <ClearContainer>
                <ScrollView>
                    <ListItem
                        itemPressed={this.handleThemePick}
                        item="Blue"
                        iconColor={styles.$blue}
                        checkmark={false}
                    />
                    <Seperator />
                    <ListItem
                        itemPressed={this.handleThemePick}
                        item="Orange"
                        iconColor={styles.$orange}
                        checkmark={false}

                    />
                    <Seperator />
                    <ListItem
                        itemPressed={this.handleThemePick}
                        item="Green"
                        iconColor={styles.$green}
                        checkmark={false}
                                        />
                    <Seperator />
                    <ListItem
                        itemPressed={this.handleThemePick}
                        item="Purple"
                        iconColor={styles.$purple}
                        checkmark={false}
                    />
                    <Seperator />
                </ScrollView>
            </ClearContainer>
        )
    }
}

export default Themes;
