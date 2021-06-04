import { Focused } from 'react-credit-cards'

export interface FormData {
    Duration: number,
    Amount: number,
    UpfrontPayment: boolean,
    number: number | string,
    expiry: number | string,
    cvc: number | string,
    focused: Focused | string,
    name: string,
    UserEmail: string,
    TnC: boolean
}

export interface FormContext {
    formData: FormData,
    setFormData: React.Dispatch<React.SetStateAction<FormData>>
}