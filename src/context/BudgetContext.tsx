import { useReducer, createContext,Dispatch, ReactNode } from "react"
import { initialState, BudgetReducer } from "../reducers/budget-reducer"
import type { BudgetState,ActionTypes } from "../reducers/budget-reducer"

type BudgetContextProps = {
    state: BudgetState,
    dispatch:Dispatch<ActionTypes>
}

type BudgetProviderProps = {
    children: ReactNode
}
export const BudgetContext = createContext({} as BudgetContextProps)

export const BudgetProvider = ({children}:BudgetProviderProps) => {

    const [state, dispatch] = useReducer(BudgetReducer, initialState)

    return (
        <BudgetContext.Provider value={{state,dispatch}}>
            {children}
        </BudgetContext.Provider>
    )
}