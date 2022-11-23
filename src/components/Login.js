import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Linking,
  TouchableOpacity,
  Button,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import { useState } from "react";
export default function Login({ navigation }) {
  const data = [
    { label: "AF +93", value: "1" },
    { label: "EG +20", value: "2" },
    { label: "BR +55", value: "3" },
    { label: "JP +81", value: "4" },
    { label: "GB +44", value: "5" },
    { label: "FR +33", value: "6" },
    { label: "GR +30", value: "7" },
    { label: "IT +39", value: "8" },
  ];

  const [value, setValue] = useState(null);

  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Menu" }],
    });
  };

  return (
    <View style={styles.container}>
      <AntDesign style={styles.icon} name="arrowleft" size={28} color="white" />
      <Text style={styles.h1}>Meu número é</Text>
      <View style={styles.direction}>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="BR +55"
        searchPlaceholder="Search..."
        value={value}
        onChange={(item) => {
          setValue(item.value);
        }}
      />
      <TextInput style={styles.input} 
      keyboardType="numeric"
      placeholder="Número de telefone"/>
      </View>
      <Text style={styles.info}>
        When you tap Continue, Tinder will send a text with verification code.
        Message and data rates may apply. The verified phone number can be used
        to log in.
      </Text>
      <Text
        style={styles.text}
        onPress={() => {
          Linking.openURL(
            "https://www.help.tinder.com/hc/pt-br/articles/360005147211"
          );
        }}
      >
        Learn what happens when your number changes
      </Text>
      <View>
        <TouchableOpacity style={styles.button} onPress={() => entrar()}><Text style={styles.textButton}>CONTINUAR</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#404040",
    flex: 1,
  },
  direction:{
    flexDirection:'row',
  },
  h1: {
    fontSize: 28,
    color: "white",
    marginTop: 40,
    marginLeft: 35,
  },
  icon: {
    marginLeft: 13,
    marginTop: 10,
  },
  input: {
    width: 200,
    margin: 12,
    borderBottomWidth: 2,
    borderBottomColor: "#ff4d4d",
    padding: 10,
    display: "flex",
    placeholderStyle:{
      color: "white",

    }
  },
  text: {
    color: "#767373",
    padding: 16,
    paddingTop: 0,
    textDecorationLine: "underline",
  },
  info: {
    color: "#ACABAB",
    padding: 16,
    paddingBottom: 0,
  },
  button: {
    padding: 10,
    backgroundColor: "#5c5c5c",
    borderRadius: 50,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical:23,
    marginHorizontal: 20,
  },
  dropdown: {
    marginLeft:20,
    marginTop:10,
    width: 90,
    height: 50,
    backgroundColor: "transparent",
  },
  placeholderStyle: {
    fontSize: 16,
    color: "#ACABAB",
  },
  selectedTextStyle: {
    fontSize: 14,
    color: "#ACABAB"
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  selectedStyle: {
    borderRadius: 12,
  },
  textButton: {
    color: "white",
    backgroundColor: "#5c5c5c",
  }
});
