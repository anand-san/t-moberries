import React from "react";
import { useAppContext } from "../../../../Utility/useAppContextHook";
import { FormData } from "../../SubscriptionProcess.types";

export default function PaymentDataBehaviour() {
  const { setFormData, formData } = useAppContext();

  const handleChange = (
    event: React.ChangeEvent<{
      name: unknown;
      value: unknown;
      maxLength: number;
    }>
  ) => {
    setFormData?.((currentFormData: FormData) => ({
      ...currentFormData,
      [event.target.name as string]: {
        Value: event.target.value as string,
        Error: false,
        HelperText: "",
      },
    }));
  };

  const handleTnC = (
    event: React.ChangeEvent<{ name: unknown }>,
    checkboxValue: boolean
  ) => {
    setFormData?.((currentFormData: FormData) => ({
      ...currentFormData,
      [event.target.name as string]: {
        Value: checkboxValue,
        Error: false,
        HelperText: "",
      },
    }));
  };

  return {
    handleChange,
    formData,
    handleTnC,
  };
}
