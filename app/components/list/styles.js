import { StyleSheet } from 'react-native'
import EstyleSheet from 'react-native-extended-stylesheet';

export default EstyleSheet.create({
    $underleyColor: '$lightGray',
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: '5%',
        paddingHorizontal: '3%',
    },
    text: {
        color: '$darkText',
        fontSize: 16,
    },
    seperator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '$border',
        flex: 1,
        marginLeft: '4%',

    },
    icon: {
        width: 30,
        height: 30,
        backgroundColor: 'transparent',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconVisible: {
        backgroundColor: '$primaryBlue',
    },
    image: {
        width: 18,
    }
});
