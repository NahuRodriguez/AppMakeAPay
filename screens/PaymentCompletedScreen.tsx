import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PaymentCompletedScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>¡Pago Completado!</Text>
      <Button title="Volver al inicio" onPress={() => navigation.navigate('CreatePaymentScreen')} />
    </View>
  );
};

export default PaymentCompletedScreen;
