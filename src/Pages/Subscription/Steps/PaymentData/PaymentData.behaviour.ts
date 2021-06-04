import React from 'react'
import { useAppContext } from "../../../../Utility/useAppContextHook"
import { FormData } from '../../SubscriptionProcess.types';

export default function PaymentDataBehaviour() {
    const { setFormData } = useAppContext()

    const handleChange = (event: React.ChangeEvent<{name: unknown, value: unknown, maxLength: number}>) => {
        if((event.target.value as string).length > event.target.maxLength)
            return
        setFormData?.((currentFormData:FormData) => ({
            ...currentFormData,
            [event.target.name as string] : event.target.value as string
        }))
    }

    const handleFocus = (event: any) => {
        setFormData?.((currentFormData:FormData) => ({
            ...currentFormData,
            focused: event.target.name
        }))
    }

    return {
        handleChange, handleFocus
    }
}
