import React from 'react'
import { useAppContext } from "../../../../Utility/useAppContextHook"
import { FormData } from '../../SubscriptionProcess.types';

export default function ParametersBehaviour() {
  const { setFormData, formData } = useAppContext()
  const handleChange = (
    event: React.ChangeEvent<
      | HTMLInputElement
      | {
        name?: string | undefined;
        value: unknown;
      }
    >,
    secondaryInput: React.ReactNode | boolean
  ) => {
    setFormData?.((currentFormData: FormData) => ({
      ...currentFormData,
      [event.target.name as string]: {
        Value: (event.target.value as string) || Boolean(secondaryInput),
        Error: false,
        HelperText: ""
      }
    }))
  }
  return {
    handleChange, formData
  }
}
