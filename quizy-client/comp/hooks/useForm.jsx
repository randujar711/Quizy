import { useState } from "react"

export const useForm = (selections) => {
    const [selections, setSelections] = useState(selections)
    const handleSelections = useMemo (() => {
        console.log('handle selections running')
        setSelections({...prevState, [option]: selections})
    }, [selections])

    return ({ selections, handleSelections })
}