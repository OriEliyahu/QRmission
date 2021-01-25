import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import QARbilities from './src/components/QRAbilities';
import GeneratorQR from './src/components/GeneratorQR';
import ScanQR from './src/components/ScanQR';

const App = () => {

  const [visibleGenerateQR, setVisibleGenerateQR] = useState(false);
  const [visibleScannerQR, setVisibleScannerQR] = useState(false);
  const [QRmessage, setQRmessage] = useState('');

  const openQRScanner = () => {
    setVisibleGenerateQR(false);
    setVisibleScannerQR(true);
  };

  const openQRGenerator = () => {
    setVisibleScannerQR(false);
    setVisibleGenerateQR(true);
  };
  
  const CloseQRGenerator = () => {
    setVisibleGenerateQR(false);
  };
  const CloseQRScanner = (message) => {
    console.log("here, m = " + message)
    setVisibleScannerQR(false);
    setQRmessage(message);
  };

  const showComponent = () => {
    if (visibleScannerQR) {
      return (
        <View style={{flex: 1}}>
          <ScanQR CloseQRScanner={CloseQRScanner}/>
        </View>
      );
    }
    else {
      return (
        <View style={{ flex: 1 }}>
          <QARbilities openQRGenerator={openQRGenerator} openQRScanner={openQRScanner} QRmessage={QRmessage}/>
          <GeneratorQR visible={visibleGenerateQR} CloseQRGenerator={CloseQRGenerator} value="QR Code ;)" />
        </View>
      );
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {showComponent()}
    </View>
  );
};


export default App;
