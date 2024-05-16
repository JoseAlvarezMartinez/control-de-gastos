import { ActionTypes, BudgetReducer, BudgetState, initialState } from "../reducers/budget-reducer"
import { useReducer, createContext, Dispatch, ReactNode } from "react"

interface ContextProviderProps {
    state: BudgetState,
    dispatch: Dispatch<ActionTypes>
}

export const ContextProvider = createContext({} as ContextProviderProps)

interface BudgetContextProps{
    children:ReactNode
}

export const BudgetContext = ({children}:BudgetContextProps) => {
    const [state, dispatch] = useReducer(BudgetReducer, initialState)
    return (
        <ContextProvider.Provider value={{state,dispatch}}>
            {children}
        </ContextProvider.Provider>
    )
}