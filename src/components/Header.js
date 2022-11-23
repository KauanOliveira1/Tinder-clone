import { View, StyleSheet } from 'react-native'
import React from 'react'
import {FontAwesome5,FontAwesome, EvilIcons } from '@expo/vector-icons'

export default function Header() {
  return (
    <View style={styles.container}>
      <FontAwesome5 name="fire" size={25} color="#F06795"/>
      <EvilIcons name="sc-instagram" size={25} color="#5c5c5c" />
      <FontAwesome name="comments" size={25} color="#5c5c5c"/>  
      <FontAwesome name="user" size={25} color="#5c5c5c"/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        height:50,
        marginTop:12,
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'white',
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:10,
        },
        shadowOpacity: 0.12,
        shadowRadius:5.40,
        elevation:9,
    },
})