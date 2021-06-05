interface FormDataElements {
    Value: string | number | boolean,
    Error?: boolean,
    HelperText?: string
}

export interface FormData {
    [key : string]: FormDataElements
}

export interface FormContext {
    formData: FormData,
    setFormData: React.Dispatch<React.SetStateAction<FormData>>
}