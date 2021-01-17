import React from 'react';
import {Text} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

import styles from './style';

const ScanQR = (props) => {

    return (
        <QRCodeScanner
            onRead={(e) => console.log(e)}
            topContent={<Text style={styles.text}></Text>}
            bottomContent={<Text style={styles.text}></Text>}
        />
    );
};

export default ScanQR;