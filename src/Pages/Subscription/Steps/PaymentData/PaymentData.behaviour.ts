import React from 'react'

export default function PaymentDataBehaviour() {
    const [formData, setFormData] = React.useState({
        number: "",
        expiry: "",
        cvc: "",
        focused: "name",
        name: ""
    })

    const handleChange = (event: React.ChangeEvent<{name: unknown, value: unknown, maxLength: number}>) => {
        if((event.target.value as string).length > event.target.maxLength)
            return
        setFormData(currentFormData => ({
            ...currentFormData,
            [event.target.name as string] : event.target.value as string
        }))
    }

    const handleFocus = (event: any) => {
        setFormData(currentFormData => ({
            ...currentFormData,
            focused: event.target.name
        }))
    }

    return {
        formData, handleChange, handleFocus
    }
}
