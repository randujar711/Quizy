import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Link, useNavigate } from 'react-router-native';

export default function Decks({  callCount, deck, setCategory}) {
    let navigate = useNavigate()

    console.log('callCount in deck comp',callCount)

    chooseDeck = (e) =>{
        console.log(e.Category)
        console.log('in choosedeck', callCount)
        // setCallCount(callCount + 1)

        setCategory(e.Category)
        navigate('/questions')
    }
    return(
        <ScrollView>
            <View style={styles.container}>
                <Text>This is my quiz app remodeled yeaaaaaa!</Text>
                <StatusBar backgroundColor="#F00" barStyle="light-content"  />
                <Link to="/questions">
                    <Text>questions page</Text>
                </Link>
                {
                    deck.map((x)=> {
                        return(
                            <TouchableOpacity key={x.id} style={styles.div} onPress={()=> {chooseDeck(x)}}>
                                <Text>{x.Title}</Text>
                                <Text>{x.Bio}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
                <Link to={'/login'}>
                    <Text>login page</Text>
                </Link>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  div: {
    backgroundColor: 'blue', 
    width: 100,
    justifyContent: 'center', 
    alignItems: 'center', 
    borderWidth: '4', 
    marginBottom: '8%', 
    borderRadius: 5
  },
});
