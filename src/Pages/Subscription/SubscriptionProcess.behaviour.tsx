import React from "react";
import { FormData } from "./SubscriptionProcess.types";
import { getSubscriptionPrices } from "../../API/request-layer";
import {SubscriptionPricesResponse} from "../../API/response-types"
import SettingsIcon from "@material-ui/icons/Settings";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import { useStyles } from "./SubscriptionProcess.styles";
import * as Steps from "./Steps";

export default function SubscriptionProcessBehaviour() {
  const [isError, setIsError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [subscriptionPrices, setSubscriptionPrices] = React.useState<SubscriptionPricesResponse[]>([]);
  const [formData, setFormData] = React.useState<FormData>({
    Duration: 12,
    Amount: 5,
    UpfrontPayment: false,
    number: "",
    expiry: "",
    cvc: "",
    focused: "name",
    name: "",
    UserEmail: "",
    TnC: false
  });

  const classes = useStyles();

  React.useEffect(() => {
    getSubscriptionPrices()
      .then((prices: SubscriptionPricesResponse[]) => {
        setSubscriptionPrices(prices);
      })
      .catch(setIsError)
      .finally(() => {
        setIsLoading(false);
      });
  }, [setIsLoading, setIsError]);

  const getFinalPrice = (duration: number, amount: number, pricing: SubscriptionPricesResponse[]) => {
    return pricing.reduce((accumulator:number, current: SubscriptionPricesResponse) => {
        if(current.duration_months === duration)
          accumulator = current.price_usd_per_gb * amount
        return accumulator
    }, 0)
  }

  const stepsData = {
    "Select Subscription Parameters": {
      icon: <SettingsIcon />,
      component: <Steps.Parameters />,
      callback: () => console.log("Step1")
    },
    Payment: {
      icon: <GroupAddIcon />,
      component: <Steps.PaymentData />,
      callback: () => console.log("Step2")
    },
    Confirmation: {
      icon: <VideoLabelIcon />,
      component: <Steps.Confirmation />,
      callback: () => console.log("Step3")
    },
  };

  return { formData, setFormData, isError, isLoading,subscriptionPrices, getFinalPrice, stepsData, classes };
}
