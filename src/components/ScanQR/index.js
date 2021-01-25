import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import styles from './style';

const ScanQR = (props) => {

  const renderClosingIcon = (
    <TouchableOpacity style={styles.buttonTouchable} onPress={() => props.CloseQRScanner()}>
      <Image
        style={styles.image}
        source={require('../../assets/cancel.png')}
      />
    </TouchableOpacity>
  );

  return (
    <QRCodeScanner
      onRead={(e) => props.CloseQRScanner(e.data)}
      topContent={<Text style={styles.text}></Text>}
      bottomContent={renderClosingIcon}
      topViewStyle={{ backgroundColor: '#0B1525', flex: 0, height: 0 }}
      cameraStyle={{ flex: 1, height: '100%' }}
      bottomViewStyle={{ flex: 0, backgroundColor: '#0B1525', paddingVertical: 10 }}
      showMarker={true}
      fadeIn={false}
    />
  );
};

export default ScanQR;