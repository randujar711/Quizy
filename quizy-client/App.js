import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { NativeRouter, Route, Routes, Link } from 'react-router-native';
import Home from './comp/Home.jsx';
import Hello from './comp/Hello.jsx';
import axios from 'axios';


axios.defaults.validateStatus = false;


export default function App() {
  const[questions, setQuestions] = useState([])
  const [category, setCategory] = useState('history')
  const [deck, setDeck] = useState([])
  useEffect(()=> {
    const request = async() => {
      let req = await fetch(`https://the-trivia-api.com/api/questions?categories=${category}&limit=5`)
      let res = await req.json()
      setQuestions(res) 
      // console.log('hello', res)
    }
    // const decksCall = async() => {
    //   try{
    //     let req = await fetch('http://127.0.0.1:3000/decks')
    //     let res = await req.json()
    //     console.log('res test',res)
    //     setDeck(res)
    //   } catch(error){
    //     console.error('error', error)
    //   }
    // }
    // decksCall()
    request()
  },[category])

async function fetchData() {
  try {
    const response = await fetch('http://127.0.0.1:5000/decks');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <NativeRouter>

        <Routes>
          <Route exact path="/" element={<Home setCategory={setCategory}/>} />
          <Route exact path="/hello" element={<Hello/>}/>
        </Routes>
        
      </NativeRouter>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
