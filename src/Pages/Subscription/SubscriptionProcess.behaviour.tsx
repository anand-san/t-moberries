import React from "react";
import { FormData } from "./SubscriptionProcess.types";
import { getSubscriptionPrices } from "../../API/request-layer";
import { SubscriptionPricesResponse } from "../../API/response-types";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import { useStyles } from "./SubscriptionProcess.styles";
import * as Steps from "./Steps";
import { postData } from "../../API/request-layer";
export default function SubscriptionProcessBehaviour() {
  const [isError, setIsError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [subscriptionPrices, setSubscriptionPrices] = React.useState<
    SubscriptionPricesResponse[]
  >([]);

  const [formData, setFormData] = React.useState<FormData>({
    Duration: {
      Value: 12,
      Error: false,
      HelperText: "",
    },
    Amount: {
      Value: 5,
      Error: false,
      HelperText: "",
    },
    UpfrontPayment: {
      Value: false,
      Error: false,
      HelperText: "",
    },
    number: {
      Value: "",
      Error: false,
      HelperText: "",
    },
    expiry: {
      Value: "",
      Error: false,
      HelperText: "",
    },
    cvc: {
      Value: "",
      Error: false,
      HelperText: "",
    },
    focused: {
      Value: "name",
    },
    name: {
      Value: "",
      Error: false,
      HelperText: "",
    },
    UserEmail: {
      Value: "",
      Error: false,
      HelperText: "",
    },
    TnC: {
      Value: false,
      Error: false,
      HelperText: "",
    },
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

  const getFinalPrice = (
    duration: number,
    amount: number,
    pricing: SubscriptionPricesResponse[]
  ) => {
    return pricing.reduce(
      (accumulator: number, current: SubscriptionPricesResponse) => {
        if (current.duration_months === duration)
          accumulator = current.price_usd_per_gb * amount;
        return accumulator;
      },
      0
    );
  };

  const stepsData = {
    "Select Subscription Parameters": {
      icon: <SettingsIcon />,
      component: <Steps.Parameters />,
    },
    Payment: {
      icon: <GroupAddIcon />,
      component: <Steps.PaymentData />,
      callback: () => validateInput(["name", "number", "expiry", "cvc"]),
    },
    Confirmation: {
      icon: <VideoLabelIcon />,
      component: <Steps.Confirmation />,
      callback: async () => {
        if (validateInput(["UserEmail", "TnC"]))
          return postData(formData)
            .then((data) => {
              return true;
            })
            .catch(console.log);
        else return false;
      },
    },
  };

  const validateInput = (dependentFields: string[]) => {
      let currentFormData = {...formData}
      let match = dependentFields.every((e:string) => {
        if(!currentFormData[e].Value){
          currentFormData[e].Error = true
          return false
        }
        return true
      })
      setFormData(currentFormData)
      return match
  }

  return {
    formData,
    setFormData,
    isError,
    isLoading,
    subscriptionPrices,
    getFinalPrice,
    stepsData,
    classes,
  };
}
