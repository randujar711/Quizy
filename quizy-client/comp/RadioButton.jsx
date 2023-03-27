import React from "react";
import { Text, View, StyleSheet, Pressable } from  'react-native'
// import { blue100 } from "react-native-paper/lib/typescript/src/styles/themes/v2/colors";

export default function RadioButton({option, selection }){    
    return(
        <View>
            {option.AllChoices?.map((x)=> {
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