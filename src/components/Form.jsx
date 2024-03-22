import React from 'react'
import { useForm } from '../hooks/useForm';

function Form() {
    const {values, handleInputChange} = useForm({
        name: ""
    })

    return (
        <form onSubmit={
            e => {
                e.preventDefault();
                console.log(values)
            }
        }>
            <input 
                type="text" 
                name="name" 
                value={values.name}
                onChange={handleInputChange} />
        </form>
    )
}

export default Form