import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect, useCallback } from 'react';
import { NativeRouter, Route, Routes, Link } from 'react-router-native';
import Decks from './comp/Decks.jsx';
import Login from './comp/Login.jsx';
import Signup from './comp/Signup.jsx';
import Questions from './comp/Questions.jsx'
import Leaderboard from './comp/Leaderboard.jsx';
import Header from './comp/Header.jsx';
 


export default function App() {
  const[questions, setQuestions] = useState([])
  const [category, setCategory] = useState([])
  const [deck, setDeck] = useState([])
  const [userOption, setUserOption] = useState(null)
  // const [callCount, setCallCount] = useState(0)
  useEffect(()=> {
    deckCall()
  },[category])
    let callCount = 0
    const deckCall = async() => {
      try{
        let req = await fetch('https://84f4-2603-7000-3f40-95aa-9c69-fc87-9f2f-d0af.ngrok.io/decks')
        let res = await req.json()
        // setCallCount(callCount + 1)
        setDeck(res)
        
        if (callCount < 1 ){
          request(category)
          console.log('category in if statement', category)
          console.log(callCount)
        }
      }
      catch(error){
        console.log('this is the error', error)
      }
    }

    const request = async(e) => {
      console.log('this is whats passed in', e)
      let req = await fetch(`https://the-trivia-api.com/api/questions?categories=${category}&limit=5`)
      let res = await req.json()
      console.log('changed, category', res)
      setQuestions(res)
    }
  console.log(category)

  return (
    <View style={styles.container}>      
      <StatusBar style="auto" />
      
      <NativeRouter>
        <Header />

        <Routes>
          <Route exact path="/" element={<Decks callCount={callCount} deck={deck} setCategory={setCategory}/>} />
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
