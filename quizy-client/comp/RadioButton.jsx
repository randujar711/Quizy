import React from "react";
import { Text, View, StyleSheet, Pressable } from  'react-native'

export default function RadioButton({AllChoices, onSelect, selections, handleSelections}){
    // console.log('ac in rb', AllChoices)
    const selection = (x)=> {
        // setUserOption(x)
        console.log(x)
    }
    console.log()
    return(
        <View>
            {AllChoices.map((x)=> {
                return(
                    <Pressable key={x.id} value={selections.option} onPress={selections => handleSelections(`${x.id}`, selections)}>
                        <Text>{x}</Text>
                    </Pressable>
                )
            })}
        </View>
    )
}