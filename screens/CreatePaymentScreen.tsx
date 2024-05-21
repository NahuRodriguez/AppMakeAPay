import React, { useState } from 'react';
import { View, TextInput, Button, Modal } from 'react-native';
import CurrencySelector from '../components/CurrencySelector';

const CreatePaymentScreen = ({ navigation }) => {
  const [amount, setAmount] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [currency, setCurrency] = useState('USD');

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Monto"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 10, marginBottom: 20 }}
      />
      <Button title={`Moneda: ${currency}`} onPress={() => setModalVisible(true)} />
      <Button title="Continuar" onPress={() => navigation.navigate('SharePaymentScreen')} />

      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <CurrencySelector
            currencies={['USD', 'EUR', 'GBP']}
            onSelectCurrency={(currency) => { setCurrency(currency); setModalVisible(false); }}
          />
        </View>
      </Modal>
    </View>
  );
};

export default CreatePaymentScreen;
