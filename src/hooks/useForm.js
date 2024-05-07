import { useState } from "react";

export const useForm = (INITIAL_STATE) => {

    const [values, setValues] = useState(INITIAL_STATE);
    
    const handleInputChange = e => {
        if (e.target.type === "file") {
            setValues({
                ...values,
                [e.target.name]: e.target.files[0]
            })
        } else {
            setValues({
                ...values,
                [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
            })
        }
    }

    const resetForm = () => setValues(INITIAL_STATE)

    return {
        values,
        handleInputChange,
        resetForm
    }
}