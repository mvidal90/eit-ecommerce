import React from 'react'

function InputGroup({
    id,
    inputLabel,
    inputType = "text",
    onChange,
    values
}) {
    return (
        <div className='input-group__container'>
            <label htmlFor={id}>{inputLabel}</label>
            {
                inputType === "textarea" ?
                    <textarea
                        id={id} 
                        name={id} 
                        type={inputType}
                        onChange={onChange}
                        value={values[id]}
                        className='input-group__input'
                    ></textarea>
                :
                    <input 
                        id={id} 
                        name={id} 
                        type={inputType}
                        onChange={onChange}
                        value={values[id]}
                        className='input-group__input' />
            }
        </div>
    )
}

export default InputGroup
