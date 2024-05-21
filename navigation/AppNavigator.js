import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreatePaymentScreen from '../screens/CreatePaymentScreen';
import SharePaymentScreen from '../screens/SharePaymentScreen';
import QRCodeScreen from '../screens/QRCodeScreen';
import PaymentCompletedScreen from '../screens/PaymentCompletedScreen';


const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShow: false,
}

const AppNavigator = () => {
  return (
    <NavigationContainer screenOption={screenOptionStyle}>
      <Stack.Navigator initialRouteName="CreatePaymentScreen">
        <Stack.Screen name="Crear pago" component={CreatePaymentScreen} />
        <Stack.Screen name="SharePaymentScreen" component={SharePaymentScreen} />
        <Stack.Screen name="QRCodeScreen" component={QRCodeScreen} />
        <Stack.Screen name="PaymentCompletedScreen" component={PaymentCompletedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
