import { useContext, createContext } from "react"
import {FormContext} from "../Pages/Subscription/SubscriptionProcess.types"
 
const SubscriptionFormContext = createContext<Partial<FormContext>>({})

const useAppContext = () => {
    const contextValue = useContext(SubscriptionFormContext)
    return contextValue
}

export {useAppContext, SubscriptionFormContext}