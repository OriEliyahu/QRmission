import React from 'react';
import { View, Text } from 'react-native';

import PrimaryButton from '../PrimaryButton';
import styles from './style';

const QRAbilities = (props) => {

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 30 }}>Scanner:</Text>
            <Text>{props.QRmessage}</Text>
            <View style={styles.QRAbilities}>
                <PrimaryButton onPress={props.openQRGenerator} title="הפקת קוד QR" style={styles.Button} />
                <PrimaryButton onPress={props.openQRScanner} title="סרוק קוד QR" style={styles.Button} />
            </View>
        </View>
    );
};

export default QRAbilities;