import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import Styles from './styles';

const Container = ({ children }) => (
  <SafeAreaView style={Styles.container}>
    <StatusBar translucent={false} barStyle="light-content" />
    {children}
  </SafeAreaView>
);

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
