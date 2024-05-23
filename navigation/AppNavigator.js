import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CreatePaymentScreen from "../screens/CreatePaymentScreen";
import SharePaymentScreen from "../screens/SharePaymentScreen";
import QRCodeScreen from "../screens/QRCodeScreen";
import PaymentCompletedScreen from "../screens/PaymentCompletedScreen";
import DivisaSelection from "../screens/DivisaSelection";
import { TouchableOpacity, Text, Image } from "react-native";
import { useSelector } from "react-redux";

const AppNavigator = () => {
  const Stack = createStackNavigator();
  const selectedCurrency = useSelector(
    (state) => state.payment.selectedCurrency
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="CreatePaymentScreen"
        screenOptions={{
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="CreatePaymentScreen"
          component={CreatePaymentScreen}
          options={({ navigation }) => ({
            title: "Crear Pago",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("DivisaSelection")}
              >
                {selectedCurrency && selectedCurrency.image ? (
                  <Image
                    source={{ uri: selectedCurrency.image }}
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 15,
                      marginRight: 10,
                    }}
                  />
                ) : (
                  <Text style={{ marginRight: 10 }}>
                    {selectedCurrency ? selectedCurrency.symbol : "Money"}
                  </Text>
                )}
              </TouchableOpacity>
            ),
            headerTitle: () => (
              <Text
                style={{ fontSize: 18, color: "#002859", fontWeight: "700" }}
              >
                {"Crear Pago"}
              </Text>
            ),
          })}
        />

        <Stack.Screen
          name="SharePaymentScreen"
          component={SharePaymentScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QRCodeScreen"
          component={QRCodeScreen}
          options={{ title: "Código QR" }}
        />
        <Stack.Screen
          name="PaymentCompletedScreen"
          component={PaymentCompletedScreen}
          options={{ title: "Pago Completado" }}
        />
        <Stack.Screen
          name="DivisaSelection"
          component={DivisaSelection}
          options={{
            title: "Seleccionar Divisa",
            headerTitleStyle: {
              fontSize: 18,
              color: "#002859",
              fontWeight: "700",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
