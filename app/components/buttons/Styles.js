import EstyleSheet from 'react-native-extended-stylesheet';

const height = 35;

export default EstyleSheet.create({
  boxContainer: {
    alignItems: 'center',
    marginTop: '10%',
    height,
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: '5%',
    height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginRight: '3%',
    width: 19,
  },
  text: {
    color: '$white',
    fontSize: 16,
    fontWeight: '300',
  },
});
