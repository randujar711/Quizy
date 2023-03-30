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
  useEffect(()=> {
    deckCall()
  },[])

    const deckCall = async() => {
      try{
        let req = await fetch('https://1de2-71-190-177-64.ngrok.io/decks')
        let res = await req.json()
        setDeck(res)
        // console.log('deck info in try statement', deck)
        request(res)
      }
      catch(error){
        console.log('this is the error', error)
      }
    }
    const request = useCallback(async() => {
      let req = await fetch(`https://the-trivia-api.com/api/questions?categories=${category}&limit=5`)
      let res = await req.json()
      console.log('changed, category', res)
      setQuestions(res)
    }, [deck])
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
