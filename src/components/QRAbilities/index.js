import React from 'react';
import {View} from 'react-native';

import PrimaryButton from '../PrimaryButton';
import styles from './style';

const QRAbilities = (props) => {

    return (
        <View style={styles.QRAbilities}>
            <PrimaryButton onPress={props.openQRGenerator} title="הפקת קוד QR" style={styles.Button}/>
            <PrimaryButton onPress={props.openQRScanner} title="סרוק קוד QR" style={styles.Button}/>
        </View>
    );
};

export default QRAbilities;