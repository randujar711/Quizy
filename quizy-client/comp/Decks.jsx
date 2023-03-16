import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';
import { Link } from 'react-router-native';

export default function Decks({ deck, setCategory}) {
    return(
        <View style={styles.container}>
            <Text>This is my quiz app remodeled yeaaaaaa!</Text>
            <StatusBar backgroundColor="#F00" barStyle="light-content"  />
            <Link to="/questions">
                <Text>questions page</Text>
            </Link>
            {
                deck.map((x)=> {
                    console.log(x)
                    return(
                        <View key={x.id} style={styles.div}>
                            <Text key={x.id}>{x.id}</Text>
                        </View>
                        
                    )
                })
            }
            <Link to={'/login'}>
                <Text>login page</Text>
            </Link>
                <Button
                    title="Sports Question" 
                    onPress={()=>{setCategory("Society & Culture")}}
                />
        </View>
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
    alignItems: 'center'
  }
});
