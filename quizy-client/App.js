import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { NativeRouter, Route, Routes, Link } from 'react-router-native';
import Home from './comp/Home.jsx';
import Hello from './comp/Hello.jsx';
 


export default function App() {
  const[questions, setQuestions] = useState([])
  const [category, setCategory] = useState('history')
  const [deck, setDeck] = useState([])
  useEffect(()=> {
    const request = async() => {
      let req = await fetch(`https://the-trivia-api.com/api/questions?categories=${category}&limit=5`)
      let res = await req.json()
      setQuestions(res) 
    }
    const deckCall = async() => {
      try{
        let req = await fetch('https://9c07-71-190-177-64.ngrok.io/decks')
        let res = await req.json()
        setDeck(res)
        console.log('deck info in try statement', deck)
      }
      catch(error){
        console.log('this is the error',error)
      }
    }
    deckCall()
    request()
  },[category])
  console.log(category)

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
