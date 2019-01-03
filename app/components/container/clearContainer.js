import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ClearContainer = ({ children }) => (
  <SafeAreaView style={styles.clearContainer}>
    <StatusBar translucent={false} />
    {children}
  </SafeAreaView>
);

ClearContainer.propTypes = {
  children: PropTypes.any,
};

export default ClearContainer;
