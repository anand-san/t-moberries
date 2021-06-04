import React from "react";
import { FormData } from "./SubscriptionProcess.types";

export default function SubscriptionProcessBehaviour() {
  const [formData, setFormData] = React.useState<FormData>({
    Duration: 12,
    Amount: 5,
    UpfrontPayment: false,
    number: "",
    expiry: "",
    cvc: "",
    focused: "name",
    name: "",
  });
  return { formData, setFormData };
}
