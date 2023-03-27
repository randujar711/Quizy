import { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native'
import { Link } from "react-router-native"
import RadioButton from './RadioButton'
import { useForm } from './hooks/useForm'

export default function Questions({questions, userOption, setUserOption}) {
    const [score, setScore] = useState(0)
    const [submit, setSubmit] = useState(null)
    const postScore = () => {
        if(submit === null){
            console.log('Quiz has yet to be completed')
        }else if(submit === true){
            console.log('submitted')
        }else {
            return
        }
    }
    // postScore()
    // const postScore = async() => {
    //     if(submit === null){
    //         console.log('Quiz has yet to be completed')
    //     }else if(submit === true){
    //         let req = await fetch ('')
    //         let res = await req.json()
    //         console.log(res)
    //     }else {
    //         return
    //     }
    // }
    // postScore()
    // dont forget to add use navigate
    return(
        <View>
            <Text>questions component</Text>
            {
                questions.map((x)=> {
                    let AllChoices = [...x.incorrectAnswers, x.correctAnswer]
                    AllChoices.sort(function () { return 0.5 - Math.random() })

                    const righty = x.correctAnswer
                    const wrongy = x.incorrectAnswers
                    
                    const selection = (x)=> {
                        console.log('this is the correct answer', testy)
                        if(x === righty){
                            console.log('correct')
                            setScore(score + 1)
                            console.log(option)
                        }else if(x === wrongy){
                            (score + 0)
                        }return 
                    }
                    return(
                        <View style={styles.question}>
                            <Text key={x.id}>
                                {x.question}
                            </Text>
                            <RadioButton keyss={x.id} selection={selection} AllChoices={AllChoices}/>
                        </View>
                    )
                })
            }
            <Button onPress={()=> setSubmit(true)} title='Submit' />
            <Link to={'/'}>
                <Text>Press to go home</Text>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    question: {
        borderWidth: '5',
        marginBottom: 10
    }
})


// import { useMemo } from "react";

// function MyComponent(props) {
//   const { items } = props;

//   const transformedItems = useMemo(() => {
//     return items.map((item) => {
//       // Some transformation logic here
//       return transformedItem;
//     });
//   }, [items]);

//   return (
//     <div>
//       {transformedItems.map((transformedItem) => {
//         return <div key={transformedItem.id}>{transformedItem.name}</div>;
//       })}
//     </div>
//   );
// }