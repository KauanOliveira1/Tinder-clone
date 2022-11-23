import { Image, View, StyleSheet, Text } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function Swipe({ user }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: user.picture.large }} style={styles.picture} />
      <View style={styles.descContainer}>
        <View style={styles.textRow}>
        <Text style={styles.text}>{user.name.first}</Text>
        <Text style={styles.age}>{user.dob.age}</Text>
        </View>
        <View style={styles.textRow}><FontAwesome
        style={styles.fontAwesome}
        name="map-marker"
        color="white"
      >
        {" "}</FontAwesome>
        <Text style={styles.country}>{user.location.country}</Text>
        </View>
      
      </View>{" "}
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  picture: {
    height: '76vh',
    resizeMode: "cover",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderRadius:20,
    padding: 0,
  },
  descContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
  },
  textRow: {
    flexDirection: "row",
  },
  text: {
    marginLeft: 10,
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textShadowColor: 'rgba(0, 0, 0, 0.80)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  age: {
    color: "white",
    fontSize: 25,
    marginLeft: 10,
    display:'flex',
    textShadowColor: 'rgba(0, 0, 0, 0.80)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,

  },
  country: {
    marginLeft: 10,
    color: "white",
    fontSize: 20,
  },
  container: {
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 7,
  },
  fontAwesome: {
    marginLeft: 10,
    marginTop:5,
    height:'6vh',
  },
});
