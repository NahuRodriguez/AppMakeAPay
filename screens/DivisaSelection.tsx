import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import { setSelectedCurrency } from './../src/store';

const DivisaSelection = ({ navigation }) => {
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const DEVICE_ID = 'd497719b-905f-4a41-8dbe-cf124c442f42';

  useEffect(() => {
    fetchCurrencies();
  }, []);

  const fetchCurrencies = async () => {
    try {
      const response = await fetch('https://payments.pre-bnvo.com/api/v1/currencies', {
        method: 'GET',
        headers: {
          'X-Device-Id': DEVICE_ID,
        },
      });
      const data = await response.json();
      setCurrencies(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching currencies:', error);
    }
  };

  const renderCurrencyItem = ({ item }) => (
    <TouchableOpacity style={{ padding: 10 }} onPress={() => handleCurrencySelection(item)}>
      <Text>{item.name} ({item.symbol})</Text>
    </TouchableOpacity>
  );

  const handleCurrencySelection = (currency) => {
    dispatch(setSelectedCurrency(currency));
    navigation.goBack(); 
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={currencies}
        renderItem={renderCurrencyItem}
        keyExtractor={(item) => item.symbol}
        ListEmptyComponent={<Text>No hay divisas disponibles</Text>}
      />
    </View>
  );
};

export default DivisaSelection;
