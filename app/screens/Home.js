import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';

import { Container } from '../components/container/index';
import { Logo } from '../components/logo';
import { InputWithButton } from '../components/TextInput';
import DismissKeyboardView from '../HOC/DismissKeyboardViewHOC';
import ClearButton from '../components/buttons/Index';
import { ConversionText } from '../components/text';
import { Header } from '../components/header';

const TEMP_CURRANCY_BASE = 'USD';
const TEMP_CURRANCY_CONVERSION = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_BASE_QUOTE = '77.99';
const TEMP_CONVERSION_RATE = '0.7799';
const TEMP_CURRENT_DATE = Date.now();

export default class Home extends React.Component {

  static propTypes = {
    navigation: PropTypes.object,
  }

  handleCurrencyPrice = () => {
    console.log('button pressed');
    const { navigation } = this.props;
    navigation.navigate('CurrencyList', { title: 'Base Currency' });
  }

  handleQuotePrice = () => {
    console.log('quote button pressed');
    const { navigation } = this.props;
    navigation.navigate('CurrencyList', { title: 'Quote Currency' });
  }

  handleChangeText = (text) => {
    console.log(`this is the text i am changin ${text}`);
  }

  handleSwitchCurrancy = () => {
    console.log('handle switch currancy pressed');
  }

  heandleGearPress = () => {
    console.log('pressed wheel');
    const { navigation } = this.props
    navigation.navigate('Options');
  }

  render() {
    return (
      <Container>
          <Header onPress={this.heandleGearPress} />
          <DismissKeyboardView>
          <KeyboardAvoidingView behavior="padding">
            <Logo />
            <InputWithButton
                onPress={this.handleCurrencyPrice}
                buttonText={TEMP_CURRANCY_BASE}
                defaultValue={TEMP_BASE_PRICE}
                keyboardType="numeric"
                onChangeText={this.handleChangeText}
            />
            <InputWithButton
                onPress={this.handleQuotePrice}
                buttonText={TEMP_CURRANCY_CONVERSION}
                value={TEMP_BASE_QUOTE}
                editable={false}
            />
            <ConversionText
                base={TEMP_CURRANCY_BASE}
                quote={TEMP_CURRANCY_CONVERSION}
                conversionRate={TEMP_CONVERSION_RATE}
                date={TEMP_CURRENT_DATE}
            />
            <ClearButton
                text="switch currancy"
                onPress={this.handleSwitchCurrancy}
            />
          </KeyboardAvoidingView>
          </DismissKeyboardView>
        </Container>
    );
  }
}
