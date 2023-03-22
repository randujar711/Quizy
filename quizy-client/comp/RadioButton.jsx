import React from "react";
import { Text, View, StyleSheet, Pressable } from  'react-native'

export default function RadioButton({AllChoices, onSelect, setUserOption}){
    console.log('ac in rb', AllChoices)
    
    return(
        <View>
            {AllChoices.map((x)=> {
                return(
                    <Pressable onPress={() => setUserOption(x)}>
                        <Text>{x}</Text>
                    </Pressable>
                )
            })}
        </View>
    )
}