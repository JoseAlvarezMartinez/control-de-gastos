type ActionTypes =
    | { type: "[ADD Budget]", payload: { budget: number } }

type BudgetState = {
    budget: number
}

export const initialState: BudgetState = {
    budget: 0
}

export const BudgetReducer = (state: BudgetState = initialState, action: ActionTypes) => {

    switch (action.type) {
        case "[ADD Budget]":
            return {
                ...state,
                budget: action.payload.budget
            } 
        default:
            return state
    }
}