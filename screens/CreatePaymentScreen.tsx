import React from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setAmount, setConceptOfPay } from '../src/store';

const CreatePaymentScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const amount = useSelector((state) => state.payment.amount);
  const conceptOfPay = useSelector((state) => state.payment.conceptOfPay);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="$ 0.00"
        value={amount}
        onChangeText={(text) => dispatch(setAmount(text))}
        keyboardType="phone-pad"
        style={styles.amountInput}
      />
      <Text style={styles.conceptLabel}>Concepto</Text>
      <TextInput
        placeholder="Añade descripción del pago"
        value={conceptOfPay}
        onChangeText={(text) => dispatch(setConceptOfPay(text))}
        style={styles.conceptInput}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SharePaymentScreen')}
      >
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  amountInput: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 64,
  },
  conceptLabel: {
    marginTop: 50,
  },
  conceptInput: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 109,
  },
  button: {
    backgroundColor: '#EAF3FF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#71B0FD',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CreatePaymentScreen;
