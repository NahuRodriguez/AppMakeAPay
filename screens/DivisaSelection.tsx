import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Image,
  StyleSheet,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCurrency } from "./../src/store";
import ImageArrowRight from "./../assets/arrow-right.png";
import ImageTickCircle from "./../assets/tick-circle.png";
import ImageSearch from "./../assets/search-normal.png";

const DivisaSelection = ({ navigation }) => {
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const DEVICE_ID = "d497719b-905f-4a41-8dbe-cf124c442f42";
  const selectedCurrency = useSelector(
    (state) => state.payment.selectedCurrency
  );

  useEffect(() => {
    fetchCurrencies();
  }, []);

  const fetchCurrencies = async () => {
    try {
      const response = await fetch(
        "https://payments.pre-bnvo.com/api/v1/currencies",
        {
          method: "GET",
          headers: {
            "X-Device-Id": DEVICE_ID,
          },
        }
      );
      const data = await response.json();
      setCurrencies(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching currencies:", error);
      setLoading(false);
    }
  };

  const handleCurrencySelection = (currency) => {
    dispatch(setSelectedCurrency(currency));
    navigation.goBack();
  };

  const filteredCurrencies = currencies.filter(
    (currency) =>
      currency.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      currency.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Image source={ImageSearch} style={styles.searchIcon} />
        <TextInput
          placeholder="Buscar"
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={styles.searchInput}
        />
      </View>
      {filteredCurrencies.map((currency) => (
        <TouchableOpacity
          key={currency.symbol}
          style={styles.currencyItem}
          onPress={() => handleCurrencySelection(currency)}
        >
          <Image
            source={{ uri: currency.image }}
            style={styles.currencyImage}
          />
          <Text style={styles.currencyText}>
            {currency.name} ({currency.symbol})
          </Text>
          {selectedCurrency?.symbol === currency.symbol ? (
            <Image source={ImageTickCircle} style={styles.checkIcon} />
          ) : <Image source={ImageArrowRight} style={styles.checkIcon} />}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
  },
  selectedCurrencyContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  selectedCurrencyText: {
    fontSize: 18,
    marginLeft: 10,
  },
  currencyItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  currencyText: {
    fontSize: 16,
    marginLeft: 10,
    flex: 1,
  },
  currencyImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  checkIcon: {
    marginLeft: "auto",
  },
});

export default DivisaSelection;
