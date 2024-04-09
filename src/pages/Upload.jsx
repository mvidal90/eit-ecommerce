import React from 'react'
import FormLayout from '../layout/FormLayout'

import { postProducts } from '../util/api'
import { validatShort, validateLong, validatePrice, validateStock } from '../util/upload-validations'

const INITIAL_STATE = {
    name: "",
    price: 0,
    stock: 0,
    brand: "",
    category: "",
    shortDesc: "",
    longDesc: "",
    ageFrom: 0,
    ageTo: 0,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDRbZbkhT3GNPpYYrzDk36V-dhPcmB6MdccFbx9wDhig&s",
}

function Upload() {

    const inputProps = {
        name: {
            inputLabel: "Nombre",
        },
        price: {
            inputLabel: "Precio",
            inputType: "number",
            validation: validatePrice
        },
        stock: {
            inputLabel: "Stock inicial",
            inputType: "number",
            validation: validateStock
        },
        brand: {
            inputLabel: "Marca",
        },
        category: {
            inputLabel: "Categoria",
        },
        shortDesc: {
            inputLabel: "Descripción corta",
            validation: validatShort
        },
        longDesc: {
            inputLabel: "Descripción larga",
            inputType: "textarea",
            validation: validateLong
        },
        delivery: {
            inputLabel: "Envío sin cargo",
            inputType: "checkbox"
        },
        ageFrom: {
            inputLabel: "Edad desde",
            inputType: "number"
        },
        ageTo: {
            inputLabel: "Edad hasta",
            inputType: "number"
        },
        img: {
            inputLabel: "Foto del producto",
            inputType: "file"
        }
    }

    return (
        <FormLayout
            title="Crea un nuevo producto"
            inputProps={inputProps}
            onSubmit={postProducts}
            labelSubmit="Guardar producto"
            initialState={INITIAL_STATE}/>
    )
}

export default Upload