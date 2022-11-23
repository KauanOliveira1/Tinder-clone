import { View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome, AntDesign, Entypo  } from "@expo/vector-icons";

export default function Footer({ handleLikePress, handlePassPress }) {
  return (
    <View style={styles.container}>
      <View />
      <TouchableOpacity style={styles.button}>
      <AntDesign name="reload1" size={30} color="yellow" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handlePassPress}>
        <FontAwesome name="times" size={30} color="#F06795"/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLikePress}>
      <AntDesign name="star" size={30} color="#3385ff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <FontAwesome
          name="heart"
          size={30}
          color="#64EDCC"
          onPress={handleLikePress}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
      <Entypo name="flash" size={32} color="purple" />
      </TouchableOpacity>
      <View />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      height:100,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    button: {
      height: '6vh',
      width:'6vh',
      backgroundColor: 'white',
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOpacity: 0.45,
      shadowRadius: 6.46,
      elevation: 9,
    },
  })
