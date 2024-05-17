import { createContext, useReducer } from "react";
import { ActionTypes, BudgetReducer, BudgetState, initialState } from "../reducers/budget-reducer";

interface ContextProviderProps {
    state: BudgetState,
    dispatch: React.Dispatch<ActionTypes>
}

interface BudgetContextProps {
    children: React.ReactNode
}

export const ContextProvider = createContext({} as ContextProviderProps)

export const BudgetContext = ({ children }: BudgetContextProps) => {
    const [state, dispatch] = useReducer(BudgetReducer, initialState)
    return (
        <ContextProvider.Provider value={{ state, dispatch}}>
            {children}
        </ContextProvider.Provider>
    )
}