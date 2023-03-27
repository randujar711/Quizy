import { useState, useMemo } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Pressable } from 'react-native'
import { Link } from "react-router-native"
import RadioButton from './RadioButton'
import { useForm } from './hooks/useForm'

export default function Questions({questions, userOption, setUserOption}) {
    const [score, setScore] = useState(0)
    const [corr, setCorr] = useState(false)
    const [wrong, setWrong] = useState(false)
    const [submit, setSubmit] = useState(null)
    const postScore = () => {
        console.log('submitted')
    }
    const AllChoices = useMemo(()=> {
        return questions.map((x) => {
            const questions = x.question
            let AllChoices = [...x.incorrectAnswers, x.correctAnswer]
            AllChoices.sort(function () { return 0.5 - Math.random() })
            const righty = x.correctAnswer
            const wrongy = x.incorrectAnswers

            return {AllChoices, righty, wrongy, questions}
        })
    }, [])
    // console.log(AllChoices)
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
            {AllChoices.map((option)=> {
                const selection = (x)=> {
                    if(x === option.righty && !corr){
                        console.log('you chose the right selection', x)
                        setScore(score + 1) 
                        setCorr(true)
                    }else if(x === option.wrongy[0] || option.wrongy[1] || option.wrongy[2] && !wrong){
                        setWrong(true)
                        setScore(score + 0)
                        setCorr(false)
                        console.log('you chose the WRONG selection:', x, 'choose:', option.righty)

                    }else{return}
                }        
                return(
                    <View style={styles.question}>
                    {console.log(score)}
                        <Text>{option.questions}</Text>
                        <RadioButton selection={selection} option={option}/>
                    </View>
                )
            })}
            <Pressable 
                onPress={postScore}
            >
                <Text>Submit</Text>
            </Pressable>
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