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

  const [isVisible, setIsVisible] = useState(false);
  const [openScanner, setOpenScanner] = useState(false);

  const openQRScanner = () => {
    setIsVisible(false);
    setOpenScanner(true);
  };

  const openQRGenerator = () => {
    setOpenScanner(false);
    setIsVisible(true);
  };
  
  const CloseQRGenerator = () => {
    setIsVisible(false);
  };

  const showComponent = () => {
    if (openScanner) {
      return (
        <View style={{flex: 1}}>
          <ScanQR />
        </View>
      );
    }
    else {
      return (
        <View style={{ flex: 1 }}>
          <QARbilities openQRGenerator={openQRGenerator} openQRScanner={openQRScanner}/>
          <GeneratorQR visible={isVisible} CloseQRGenerator={CloseQRGenerator} value="QR Code ;)" />
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
