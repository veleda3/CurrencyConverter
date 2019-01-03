import EstyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native'

const {height, width} = Dimensions.get('window');

export default EstyleSheet.create({
  container: {
    position: 'absolute',
    '@media ios': {
      top: 40,
    },
    '@media android': {
      top: 25,
    },
    right: 10,
    left: 0,
    zIndex: 10,
  },
  icon: {
    alignSelf: 'flex-end',
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  image: {
    width: 30,
    height: 30,
  },
});
