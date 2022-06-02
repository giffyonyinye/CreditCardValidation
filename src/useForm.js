import { useState } from "react";
import ValidateInfo from './validateInfo'

const UseForm = () => {
    const [values, setValues] = useState({
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
    });

    const [errors, setErrors] = useState("");

    const handleFocus = e => {
        setValues({
            ...values,
            focus: e.target.name
        })
    }

    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name] : value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setErrors(ValidateInfo(values))
    }

    return {handleChange,handleFocus,handleSubmit,values, errors}
}

export default UseForm