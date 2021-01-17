import {StyleSheet} from 'react-native';

import Colors from '../../constants/colors';

export default StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 30,
    },
    text: {
        color: 'white',
        fontSize: 18
    }
});