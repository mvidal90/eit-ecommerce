import React, { useState } from 'react'
import Text from '../components/Text'
import Form from '../components/Form'
import InputGroup from '../components/InputGroup'

import { useForm } from "../hooks/useForm";
import { postMessage } from '../util/api';

const INITIAL_STATE = {
    name: "",
    email: "",
    subject: "",
    body: ""
}

function Contact() {
    const {values, handleInputChange, resetForm} = useForm(INITIAL_STATE)
    const [loadingForm, setLoadingForm] = useState(false)
    
    const inputProps = {
        name: {
            inputLabel: "Nombre y apellido",
        },
        email: {
            inputLabel: "Correo electrónico",
            inputType: "email"
        },
        subject: {
            inputLabel: "Asunto",
        },
        body: {
            inputLabel: "Mensaje",
            inputType: "textarea"
        }
    }

    return (
        <div className='contact__container'>
            <Text renderAs="h2" content="Envíanos un mensaje"/>
            <Form 
                onSubmit={() => {
                    setLoadingForm(true)
                    postMessage(values)
                        .then( data => console.log(data))
                        .catch( err => console.error(err))
                        .finally( () => {
                            setLoadingForm(false)
                            resetForm()})
                }}
                labelButton="Enviar mensaje"
                loading={loadingForm}
            >
                {
                    Object.entries(inputProps)
                        .map(
                            ([key, props]) =>
                                <InputGroup
                                    key={key}
                                    id={key}
                                    onChange={handleInputChange}
                                    values={values}
                                    {...props}
                                />
                        )
                }
            </Form>
        </div>
    )
}

export default Contact