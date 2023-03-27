import { useState, useMemo } from "react"

export const useForm = (selected) => {
    const [selections, setSelections] = useState(selected)
    const handleSelections = useMemo (() => {
        return(option, value) => {
            console.log('handle selections running')
            setSelections({...selections, [option]: value})
            console.log('value in custom hook',value)
            console.log('option in custom hook',option)
        }
    }, [])
        console.log('selections in custom hook',selections)
    return ({ selections, handleSelections })
}
