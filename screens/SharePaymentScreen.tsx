import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import ImageMoneyTime from "../assets/money-time.png";
import ImageMail from "../assets/sms.png";
import ImageWhatsapp from "../assets/whatsapp.png";
import ImageLink from "../assets/link.png";
import ImageExport from "../assets/export.png";
import ImageWallet from "../assets/wallet-add.png";
import ImageButton from "../assets/Button.png";

const SharePaymentScreen = () => {
  const amount = useSelector((state) => state.payment.amount);
  const navigation = useNavigation();
  const [contact, setContact] = useState("");

  const shareViaEmail = () => {
    // Lógica para compartir por correo
  };

  const shareViaWhatsApp = () => {
    // Lógica para compartir por WhatsApp
  };

  const generateQRCode = () => {
    navigation.navigate("QRCodeScreen");
  };

  const shareWithOther = () => {
    // Lógica para compartir con otras aplicaciones
    
  };

  const newRequest = () => {
    navigation.navigate("CreatePaymentScreen");
  };

  return (
    <View
      style={{
        flex: 1,
        marginTop: 50,
        padding: 20,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flexDirection: "colum",
          alignItems: "center",
          backgroundColor: "#F9FAFC",
          rounded: 10,
          padding: 10,
          marginBottom: 20,
          width: "100%",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            source={ImageMoneyTime}
            style={{ width: 58, height: 58, marginRight: 10 }}
          />
          <View style={{ marginLeft: 12 }}>
            <Text style={{ fontSize: 14, color: "#647184", fontWeight: "400" }}>
              Solicitud de Pago
            </Text>
            <Text style={{ fontSize: 30, color: "#002859", fontWeight: "600" }}>
              {amount}
            </Text>
          </View>
        </View>
        <Text style={{ fontSize: 12, color: "#647184", fontWeight: "400" }}>
          Comparte el enlace de pago con el cliente
        </Text>
      </View>
      
      <View style={{flexDirection:"row",}}>
      <TouchableOpacity style={styles.buttonFirst} onPress={generateQRCode}>
        <Image source={ImageLink} style={styles.icon} />
        <Text>Generar QR</Text>
      </TouchableOpacity>
      <Image source={ImageButton} style={{marginLeft:5}} />
      </View>

      <TouchableOpacity style={styles.button} onPress={shareViaEmail}>
        <Image source={ImageMail} style={styles.icon} />
        <Text>Enviar por Correo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={shareViaWhatsApp}>
        <Image source={ImageWhatsapp} style={styles.icon} />
        <Text>Enviar por WhatsApp</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={shareWithOther}>
        <Image source={ImageExport} style={styles.icon} />
        <Text>Compartir con otras aplicaciones</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2} onPress={newRequest}>
        <Text style={styles.buttonText}>Nueva Solicitud</Text>
        <Image source={ImageWallet} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  buttonFirst: {
    flex:1, 
    flexDirection:"row", 
    alignItems:"center",
    padding: 18,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#EAF3FF",
    marginBottom: 10,
  },
  button: {
    flexDirection: "row",
    padding: 18,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#EAF3FF",
    marginBottom: 10,
  },
  button2: {
    marginTop: 238,
    backgroundColor: "#EAF3FF",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#71B0FD",
    fontSize: 16,
    fontWeight: "600",
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    marginRight: 10,
  },
};

export default SharePaymentScreen;
