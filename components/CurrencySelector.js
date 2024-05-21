import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const CurrencySelector = ({ currencies, onSelectCurrency }) => {
  return (
    <View style={styles.container}>
      {currencies.map(currency => (
        <TouchableOpacity key={currency} onPress={() => onSelectCurrency(currency)}>
          <Text style={styles.currency}>{currency}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  currency: {
    padding: 10,
    fontSize: 18,
  },
});

export default CurrencySelector;
