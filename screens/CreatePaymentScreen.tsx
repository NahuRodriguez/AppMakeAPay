import React, { useState } from 'react';
import { View, TextInput, Button, Modal } from 'react-native';

const CreatePaymentScreen = ({ navigation }) => {
  const [amount, setAmount] = useState('');

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="$ 0.00"
        value={amount}
        onChangeText={setAmount}
        keyboardType="phone-pad"
      />
      <Button title="Continuar" onPress={() => navigation.navigate('SharePaymentScreen')} />
    </View>
  );
};

export default CreatePaymentScreen;
