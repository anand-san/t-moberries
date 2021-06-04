import React from 'react'
import { useAppContext } from "../../../../Utility/useAppContextHook"
import { FormData } from '../../SubscriptionProcess.types';

export default function PaymentDataBehaviour() {
    const { setFormData, formData } = useAppContext()

    const handleChange = (event: React.ChangeEvent<{name: unknown, value: unknown, maxLength: number}>) => {
        console.log(event.target.value)
        setFormData?.((currentFormData:FormData) => ({
            ...currentFormData,
            [event.target.name as string] : event.target.value as string
        }))
    }

    const handleTnC = (event: React.ChangeEvent<{name: unknown}>, checkboxValue: boolean) => {
        setFormData?.((currentFormData:FormData) => ({
            ...currentFormData,
            [event.target.name as string] : checkboxValue
        }))
    }

    return {
        handleChange, formData, handleTnC
    }
}
