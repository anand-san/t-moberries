import React from 'react'

export default function ParametersBehaviour() {
    const [formData, setFormData] = React.useState({
        Duration: 12,
        Amount: 5,
        UpfrontPayment: false
    })
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
        setFormData((currentFormData) => ({
          ...currentFormData,
          [event.target.name as string]: (event.target.value as string) || sInput,
        }));
      };
    return {
        formData, handleChange
    }
}
