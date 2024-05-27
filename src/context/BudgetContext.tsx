import { Dispatch, ReactNode, createContext, useReducer } from "react"
import { ActionTypes, BudgetReducer, BudgetState, initialState } from "../reducers/budget-reducer"

interface BudgetContextProps {
    state: BudgetState,
    dispatch: Dispatch<ActionTypes>
}

export const BudgetContext = createContext<BudgetContextProps>(null!)

interface BudgetProviderProps {
    children: ReactNode
}

export const BudgetProvider = ({ children }: BudgetProviderProps) => {

    const [state, dispatch] = useReducer(BudgetReducer, initialState)

    return (
        <BudgetContext.Provider value={{ state, dispatch }}>
            {children}
        </BudgetContext.Provider>
    )

}