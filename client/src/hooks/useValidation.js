import { useState } from "react"
import Joi from 'joi-browser'

export const useValidation = (value, schema) => {
    const [errors, setErrors] = useState({})
    const [data] = useState({ ...value })

    const handleChange = ({target: {name, value, checked, type}}) => {
        if(type === 'checkbox') return data[name] = checked
        const errorData = { ...errors }
        const errorMessage = validateProperty(name, value)
        if(errorMessage) errorData[name] = errorMessage
        else delete errorData[name]
        data[name] = value
        setErrors(errorData)
    }

    const validateProperty = (name, value) => {
        const obj = { [name]:value }
        const { error } = Joi.validate(obj, {[name]: schema[name]})
        if(error){
            const customError = createCustomError(error.details[0].type, name)
            return customError
        }
        return null
    }

    const validate = (data) => {
        const { error } = Joi.validate(data, schema, { abortEarly: false })
        return error
    }
    
    return {data, errors, handleChange, validate}
}

const createCustomError = (type, name) => {
    if(name === 'phoneNumber') return "יש לרשום מספר טלפון תקין בין 8-10 מספרים"
    switch (type){
        case 'any.empty':
            return 'שדה זה הינו שדה חובה'
        case 'string.min':
            return 'שדה זה חייב להכיל מינימום 2 תווים'
        case 'string.email':
            return 'יש לרשום כתובת אימייל תקינה'
        case 'string.max':
            return 'שדה זה חייב להכיל מקסימום 10 תווים'
    }
}