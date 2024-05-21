import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SharePaymentScreen = () => {
  const navigation = useNavigation();
  const [contact, setContact] = useState('');

  const shareViaEmail = () => {
    // Lógica para compartir por correo
  };

  const shareViaWhatsApp = () => {
    // Lógica para compartir por WhatsApp
  };

  const generateQRCode = () => {
    navigation.navigate({ screen: 'QRCodeScreen' });
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Correo o Teléfono"
        value={contact}
        onChangeText={setContact}
        style={{ borderWidth: 1, padding: 10, marginBottom: 20 }}
      />
      <Button title="Enviar por Correo" onPress={shareViaEmail} />
      <Button title="Enviar por WhatsApp" onPress={shareViaWhatsApp} />
      <Button title="Generar QR" onPress={generateQRCode} />
    </View>
  );
};

export default SharePaymentScreen;
