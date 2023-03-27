import React from "react";
import { Text, View, StyleSheet, Pressable } from  'react-native'
// import { blue100 } from "react-native-paper/lib/typescript/src/styles/themes/v2/colors";

export default function RadioButton({AllChoices, selection, keyss}){
    console.log('keys',keyss)
    return(
        <View>
            {AllChoices?.map((x)=> {
                return(
                    <Pressable 
                        onPress={()=>{selection(x)}}>
                        <Text>{x}</Text>
                    </Pressable>
                )
            })}
        </View>
    )
}