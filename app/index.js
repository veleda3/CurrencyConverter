import React from 'react';
import EstyleSheet from 'react-native-extended-stylesheet';
import Navigator from './config/routes'

EstyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $PrimaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $PrimaryPurple: '#9E768F',

  $white: 'white',
  $black: 'black',
  $border: '#A9A9A9',
  $inputColor: '#797979',
  $lightGray: '#D3D3D3',
  $darkText: '#343434',

});

export default () => (<Navigator />);
