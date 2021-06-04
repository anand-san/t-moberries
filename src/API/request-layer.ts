import axios from "axios";
import {FormData} from "../Pages/Subscription/SubscriptionProcess.types"
const AXIOS_TIMEOUT = 60000;

export let api = axios.create({
  timeout: AXIOS_TIMEOUT,
  headers: { "Content-Type": "application/json" },
});

export const getSubscriptionPrices = () => {
  return api.get("https://cloud-storage-prices-moberries.herokuapp.com/prices").then(response => {
    return response.data.subscription_plans
  }).catch(e => { throw e })
}

export const postData = (payload:FormData) => {
  return api({
    baseURL: "https://httpbin.org/",
    method: "post",
    url: "post",
    data: payload,
  }).then(response => {
    return response
  }).catch(e => {throw e})
}