import React from "react";
import { Text, View, StyleSheet, Pressable } from  'react-native'

export default function RadioButton({option, selection }){    
    return(
        <View>
            {option.AllChoices?.map((x)=> {
                return(
                    <Pressable 
                        style={styles.question}
                        onPress={()=>{selection(x)}}
                    >
                        <Text>{x}</Text>
                    </Pressable>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    question:{
        borderBottomWidth: '2', 
        borderTopWidth: '2',
        margin: '2% 5% 2% 5%',
        // marginBottom: 8,
        backgroundColor: 'orange'
    }
})