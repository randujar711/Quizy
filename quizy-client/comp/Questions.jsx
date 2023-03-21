import { useState } from 'react'
import { View, Text } from 'react-native'
import { Link, Form, Input, Label, TextInput} from "react-router-native"

const Questions = ({questions}) => {
    const [score, setScore] = useState(0)
    return(
        <View>
            <Text>questions component</Text>
            {console.log('this is questions on questions page',questions)}
            {
                questions.map((x)=> {
                    return(
                        <Text key={x.id}>
                            <TextInput />
                            {x.question}
                        </Text>
                    )
                })
            } 
            
            <Link to={'/'}>
                <Text>Press to go home</Text>
            </Link>
        </View>
    )
}
export default Questions