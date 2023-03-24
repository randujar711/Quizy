import { useState } from "react"

export const useForm = (selections) => {
    const [selections, setSelections] = useState(selections)
    const handleSelections = () => {
        setSelections({...prevState, [option]: selections})
    }
    return ({ selections, handleSelections})
}

