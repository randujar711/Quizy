import { useState, useMemo } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Pressable, ScrollView, Alert } from 'react-native'
import { Link, useNavigate } from "react-router-native"
import RadioButton from './RadioButton'

export default function Questions({questions, userOption, setUserOption}) {
    const [score, setScore] = useState(0)
    const [corr, setCorr] = useState(false)
    const [wrong, setWrong] = useState(false)
    const [submit, setSubmit] = useState(null)

    let nav = useNavigate()
    const postScore = () => {
        console.log('submitted')
        // Alert('Submitted')
        nav('/')
    }
    console.log('in questions page', questions)
    const AllChoices = useMemo(()=> {
        return questions?.map((x) => {
            console.log('inside usememo', x)
            const questions = x.question
            let AllChoices = [...x.incorrectAnswers, x.correctAnswer]
            AllChoices.sort(function () { return 0.5 - Math.random() })
            const righty = x.correctAnswer
            const wrongy = x.incorrectAnswers
            return {AllChoices, righty, wrongy, questions}
        })
    }, []) 
    return(
        <ScrollView style={{marginTop: 50}}>
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
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    question: {
        borderWidth: '5',
        marginBottom: 10
    }
})