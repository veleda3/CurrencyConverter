import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import Styles from './Styles';
import styles from '../TextInput/styles';

const ClearButton = ({ text, onPress }) => (
  <View style={Styles.boxContainer}>
    <TouchableOpacity style={Styles.buttonContainer} onPress={onPress}>
      <Image resizeMode="contain" style={Styles.image} source={require('./images/icon.png')} />
      <Text style={Styles.text}>{text}</Text>
    </TouchableOpacity>
  </View>
);

export default ClearButton;

ClearButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
