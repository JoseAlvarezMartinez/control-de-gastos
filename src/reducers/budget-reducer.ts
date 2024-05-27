export type ActionTypes =
    | { type: "[ADD Budget]", payload: { budget: number } }
    | { type: "[MODAL open/close]", payload: { isOpen: boolean } }

export type BudgetState = {
    budget: number,
    isOpen:boolean
}

export const initialState: BudgetState = {
    budget: 0,
    isOpen:false
}

export const BudgetReducer = (state: BudgetState = initialState, action: ActionTypes) => {

    switch (action.type) {
        case "[ADD Budget]":
            return {
                ...state,
                budget: action.payload.budget
            }
        case "[MODAL open/close]":
            return {
                ...state,
                isOpen: action.payload.isOpen
            }
        default:
            return state
    }
}