import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';


import styles from './style';

const PrimaryButton = props => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={[styles.button, props.style]}>
            <Text style={styles.text}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default PrimaryButton;