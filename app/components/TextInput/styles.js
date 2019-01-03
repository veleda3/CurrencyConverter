import EstyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

export default EstyleSheet.create({
  $backgroundColorBase: '$white',
  container: {
    display: 'flex',
    backgroundColor: '$white',
    flexDirection: 'row',
    width: '90%',
    marginBottom: 10,
    height: '10%',
    borderRadius: 5,
  },
  disableContainer: {
    backgroundColor: '$lightGray',
  },
  buttonContainer: {
    justifyContent: 'center',
    height: '100%',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: '$white',
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 20,
    paddingHorizontal: 16,
    color: '$primaryBlue',

  },
  border: {
    backgroundColor: '$border',
    width: StyleSheet.hairlineWidth,
  },
  input: {
    flex: 1,
    paddingHorizontal: 8,
    height: '100%',
    fontSize: 18,
    color: '$inputColor',
  },
});
