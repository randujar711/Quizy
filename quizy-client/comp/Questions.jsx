import { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native'
import { Link } from "react-router-native"
import RadioButton from './RadioButton'
import { useForm } from './hooks/useForm'

export default function Questions({questions, userOption, setUserOption}) {
    const [score, setScore] = useState(0)
    const { selections, handleSelections } = useForm({ email: '', password: '' });

    const handleSubmit = () => {
        console.log('this is values', values);
    };

    return(
        <View>
            <Text>questions component</Text>
            {/* {console.log('this is questions on questions page',questions)} */}
            {
                questions.map((x)=> {
                    let AllChoices = [...x.incorrectAnswers, x.correctAnswer]
                    AllChoices.sort(function () { return 0.5 - Math.random() })
                    {/* let RetChoices = {key: AllChoices} */}
                    {/* console.log(RetChoices) */}
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
                            <RadioButton AllChoices={AllChoices} userOption={userOption} setUserOption={setUserOption}/>
                        </View>
                        
                    )
                })
            }
            <TouchableOpacity onPress={()=>{}}>
                <Text>Submit</Text>
            </TouchableOpacity>
            <TextInput value={selections.email} onChangeText={value => handleSelections('email', value)} />
            <TextInput value={selections.password} onChangeText={value => handleSelections('password', value)} />
            <Button onPress={handleSubmit} title="Submit" />
            
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