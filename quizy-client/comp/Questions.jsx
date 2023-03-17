import { useState } from 'react'
import { View, Text } from 'react-native'
import { Link } from "react-router-native"

const Questions = ({questions}) => {
    return(
        <View>
            <Text>questions component</Text>
            <Form>
            {
                questions.map((x)=> {
                    let AllChoices = [...obj.incorrectAnswers, obj.correctAnswer]
                    AllChoices.sort(function () { return 0.5 - Math.random() })
                    const handleChange = (e) => {
                        e.preventDefault()
                        if (e.target.value === obj.correctAnswer) setScore(score + 1)
                    }
                    console.log(score)
                    return(
                        <View>
                            <Text>{x.question}</Text>
                                <Input onChange={handleChange} id='a' type="radio" name={obj.id} value={AllChoices[0]} />
                                <Label for="a">{AllChoices[0]}</Label>
                                <Input onChange={handleChange} id='b' type="radio" name={obj.id} value={AllChoices[1]} />
                                <Label for="b">{AllChoices[1]}</Label>
                                <Input onChange={handleChange} id='c' type="radio" name={obj.id} value={AllChoices[2]} />
                                <Label for="c">{AllChoices[2]}</Label>
                                <Input onChange={handleChange} id='d' type="radio" name={obj.id} value={AllChoices[3]} />
                                <Label for="d">{AllChoices[3]}</Label>                        </View>
                        
                    )
                })
            }
            </Form>
            <Link to={'/'}>
                <Text>Press to go home</Text>
            </Link>
        </View>
    )
}
export default Questions