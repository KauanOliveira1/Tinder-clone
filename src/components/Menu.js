import React,{useState, useEffect,useRef} from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import  Constants from 'expo-constants';
import Header from './Header.js'
import axios from 'axios'
import Footer from './Footer.js';
import Swipping from './Swipping.js';


export default function Menu() {

  const [users, setUsers]=useState([])
  const [index,setIndex]=useState(0)
  const swipesRef = useRef(null)
  async function fetchUsers(){
    
    try{
      const{data} = await axios.get('https://randomuser.me/api/?gender=female&results=100')

      setUsers(data.results)
      console.log(data.results)
    }catch(error){
      console.log(error)
      Alert.alert('Erro em puxar usuarios','',[{text:'Retry', onPress: () => fetchUsers()}])
    }
  }

  useEffect(()=>{
    fetchUsers()
  }, [])

  function handleLike(){
    console.log('like')
    nextUser()
  }

  function handlePass(){
    console.log('pass')
    nextUser()
  }

  function nextUser(){
    const nextIndex =users.length -2 === index ? 0 : index + 1
    setIndex(nextIndex)
  }

  function handleLikePress() {
    swipesRef.current.openLeft()
  }
  function handlePassPress() {
    swipesRef.current.openRight()
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.swipes}>
        {users.length > 1 && users.map((u,i)=>index === i &&(
          <Swipping key={i} ref={swipesRef} users={users} index={index} handleLike={handleLike} handlePass={handlePass} ></Swipping>
        ))} 
      </View>
      <Footer handleLikePress={handleLikePress} handlePassPress={handlePassPress}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:Constants.statusBarHeight
  },
  swipes:{
    flex:1,
    padding:10,
    paddingTop: 8,
  }
});
