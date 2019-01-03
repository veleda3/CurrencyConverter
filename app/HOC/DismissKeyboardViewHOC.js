import React from 'react';
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import PropTypes from 'prop-types';

const DismissKeyboardView = ({ children }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {children}
    </View>
  </TouchableWithoutFeedback>
);

export default DismissKeyboardView;

DismissKeyboardView.propTypes = {
  children: PropTypes.any,
};
