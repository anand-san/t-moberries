import axios from "axios";
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