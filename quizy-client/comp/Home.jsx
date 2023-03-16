import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';
import { Link } from 'react-router-native';

export default function Home({ setCategory}) {
    return(
        <View style={styles.container}>
            <Text>This is my quiz app remodeled yeaaaaaa!</Text>
            <StatusBar style="auto" />
            <Link to="/hello">
                <Text>Hello page</Text>
            </Link>
            {/* <Image source={require('quizy-client/assets/photo-1470225620780-dba8ba36b745.jpeg')} /> */}
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
