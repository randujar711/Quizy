import { useState } from 'react'
import { View, Text } from 'react-native'
const Questions = () => {
    return(
        <View>
            {/* <StatusBar style="auto" /> */}
            <Text>questions component</Text>
            <Link>
                <Text to={'/'}>Press to go home</Text>
            </Link>
        </View>
    )
}
export default Questions