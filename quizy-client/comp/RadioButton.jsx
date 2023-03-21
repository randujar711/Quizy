import React from "react";
import { Text, View, StyleSheet } from  'react-native'

export default function RadioButton({AllChoices, onSelect}){
    console.log('ac in rb', AllChoices)
    return(
        <View>
            {AllChoices.map((x)=> {
                return(
                    <Text>{x}</Text>
                )
            })}
            {/* {RetChoices.map((x)=> {
                console.log(x)
                    return(
                        <Text>{x}</Text>
                    )
                })} */}
                {/* <Text>{AllChoices[0]}</Text> */}
        </View>
    )
}