import React from 'react';
import { Text } from 'react-native';
import moment from 'moment';
import PropTypes from 'prop-types';
import styles from './styles'


const ConversionText = ({ base, quote, conversionRate, date }) => (
  <Text style={styles.text}>
    1 {base} = {conversionRate} {quote} as of {moment(date).format('MM D, YYYY')}  
  </Text>
);

export default ConversionText;

ConversionText.propTypes = {
  base: PropTypes.string,
  quote: PropTypes.string,
  conversionRate: PropTypes.string,
  date: PropTypes.number,
};
