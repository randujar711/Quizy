import { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Link } from "react-router-native"

export default function Questions({questions}) {
    const [score, setScore] = useState(0)

    return(
        <View>
            <Text>questions component</Text>
            {console.log('this is questions on questions page',questions)}
            {
                questions.map((x)=> {
                    let AllChoices = [...x.incorrectAnswers, x.correctAnswer]
                        AllChoices.sort(function () { return 0.5 - Math.random() })
                        const handleChange = (e) => {
                            e.preventDefault()
                            if (e.target.value === x.correctAnswer) setScore(score + 1)
                        }
                        console.log('after randmization',AllChoices)
                    return(
                        <View>
                            <Text key={x.id}>
                                {x.question}
                            </Text>
                            <TextInput 
                                defaultValue={AllChoices[0]}
                                type='radio'
                            />
                            <TextInput 
                                defaultValue={AllChoices[1]}
                                type='radio'
                            />
                            <TextInput 
                                defaultValue={AllChoices[2]}
                                type='radio'
                            />
                            <TextInput 
                                defaultValue={AllChoices[3]}
                                type='radio'
                            />
                        </View>
                        
                    )
                })
            } 
            
            <Link to={'/'}>
                <Text>Press to go home</Text>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    question: {
        borderWidth: 5
    }
})