import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';


const Header = ({ onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress} style={styles.icon}>
      <Image risezeMode="contain" style={styles.image} source={require('./images/gear.png')} />
    </TouchableOpacity>
  </View>
);

export default Header;


Header.propTypes = {
  onPress: PropTypes.func.isRequired,
};
