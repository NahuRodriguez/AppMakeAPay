import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { WebSocket } from 'ws';

const QRCodeScreen = () => {
  const [paymentStatus, setPaymentStatus] = useState('pending');
  const socket = new WebSocket('wss://payments.pre-bnvo.com/ws/merchant/<>');

  useEffect(() => {
    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.status === 'completed') {
        setPaymentStatus('completed');
      }
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {paymentStatus === 'pending' ? (
        <>
          <QRCode value="https://your-payment-url" size={200} />
          <Text>Escanee el QR para pagar</Text>
        </>
      ) : (
        <Text>Pago Completado</Text>
      )}
    </View>
  );
};

export default QRCodeScreen;
