import EstyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width / 2;

export default EstyleSheet.create({
  $largeImageContainerSize: width,
  $largeImageSize: width / 2,
  $smallImageContainer: width / 2,
  $smallImage: width / 4,


  container: {
    alignItems: 'center',
    height: width,
    marginBottom: '5%',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width,
  },
  backgroundImage: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    flex: 1,
  },
  image: {
    width: '$largeImageSize',
  },
  text: {
    fontWeight: '600',
    fontSize: 28,
    letterSpacing: -0.5,
    color: '$white',
    marginTop: 5,
  },
});
