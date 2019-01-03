import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import color from 'color';
import Styles from './styles';

const InputWithButton = ({
  buttonText,
  onPress,
  editable = true,
  ...props
}) => {
  const stylesContainer = [Styles.container];
  if (editable === false) {
    stylesContainer.push(Styles.disableContainer)
  }
  const underlayColor = color(Styles.$backgroundColorBase).darken(0.2);
  return (
    <View style={stylesContainer}>
      <TouchableHighlight
        underlayColor={underlayColor}
        style={Styles.buttonContainer}
        onPress={onPress}
      >
        <Text style={Styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={Styles.border} />
      <TextInput
        style={Styles.input}
        editable={editable}
        {...props}
      />
    </View>
  );
};

InputWithButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  editable: PropTypes.bool,
};

export default InputWithButton;
