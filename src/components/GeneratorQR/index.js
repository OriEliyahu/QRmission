import React from 'react';
import { View, Text, Modal } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

import PrimaryButton from '../PrimaryButton';
import styles from './style';

const GeneratorQR = (props) => {
    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.GeneratorQR}>
                <Text style={styles.text}>Generator QR</Text>
                <QRCode value={props.value}/>
                <View style={styles.buttonContainer}>
                    <PrimaryButton title="Close" onPress={props.CloseQRGenerator} style={styles.button} />
                </View>
            </View>
        </Modal>
    );
};

export default GeneratorQR;