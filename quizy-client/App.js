import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { NativeRouter, Route, Routes, Link } from 'react-router-native';
import Decks from './comp/Decks.jsx';
import Login from './comp/Login.jsx';
import Signup from './comp/Signup.jsx';
import Questions from './comp/Questions.jsx'
import Leaderboard from './comp/Leaderboard.jsx';
import Header from './comp/Header.jsx';
 


export default function App() {
  const[questions, setQuestions] = useState([])
  const [category, setCategory] = useState('history')
  const [deck, setDeck] = useState([])
  const [userOption, setUserOption] = useState(null)

  useEffect(()=> {
    const request = async() => {
      let req = await fetch(`https://the-trivia-api.com/api/questions?categories=${category}&limit=5`)
      let res = await req.json()
      // console.log('changed, category', res)
      setQuestions(res)
    }
    const deckCall = async() => {
      try{
        let req = await fetch('https://2e61-71-190-177-64.ngrok.io/decks')
        let res = await req.json()
        setDeck(res)
        // console.log('deck info in try statement', deck)
      }
      catch(error){
        console.log('this is the error', error)
      }
    }
    // console.log(deck)
    deckCall()
    request()
  },[category])
  // console.log(category)

  return (
    <View style={styles.container}>      
      <StatusBar style="auto" />
      
      <NativeRouter>
        <Header />

        <Routes>
          <Route exact path="/" element={<Decks deck={deck} setCategory={setCategory}/>} />
          <Route exact path='/questions' element={<Questions userOption={userOption} setUserOption={setUserOption} questions={questions}/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path ='/signup' element={<Signup/>}/>
          <Route exact path='/leaderboard' element={<Leaderboard/>}/>
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
