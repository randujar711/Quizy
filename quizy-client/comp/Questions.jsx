import { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native'
import { Link } from "react-router-native"
import RadioButton from './RadioButton'
import { useForm } from './hooks/useForm'

export default function Questions({questions, userOption, setUserOption}) {
    const [score, setScore] = useState(0)
    // const { selections, handleSelections } = useForm({ 1: '', 2: '', 3: '', 4: '', 5: ''});

    const handleSubmit = () => {
        console.log('this is values', values);
    };

    return(
        <View>
            <Text>questions component</Text>
            {
                questions.map((x)=> {
                    let AllChoices = [...x.incorrectAnswers, x.correctAnswer]
                    AllChoices.sort(function () { return 0.5 - Math.random() })
                    console.log('', userOption)
                    const handleChange = (e) => {
                        e.preventDefault()
                        if (e.target.value === x.correctAnswer) setScore(score + 1)
                    }
                    {/* console.log('after randmization', AllChoices) */}
                    return(
                        <View style={styles.question}>
                            <Text key={x.id}>
                                {x.question}
                            </Text>
                            <RadioButton AllChoices={AllChoices}/>
                        </View>
                    )
                })
            }
            <Button onPress={handleSubmit} title='Submit' />
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