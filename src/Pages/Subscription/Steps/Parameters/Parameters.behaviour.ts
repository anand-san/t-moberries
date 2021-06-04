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
    sInput: React.ReactNode | boolean
  ) => {
    setFormData?.((currentFormData: FormData) => ({
      ...currentFormData,
      [event.target.name as string]: (event.target.value as string) || sInput
    }))
  }
  return {
    handleChange, formData
  }
}
