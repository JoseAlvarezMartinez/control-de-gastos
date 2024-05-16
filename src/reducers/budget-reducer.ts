export type ActionTypes = {
    type: "agregar-presupuesto", payload: { budget: number }
}

export interface BudgetState {
    budget: number
}

export const initialState: BudgetState = {
    budget: 0
}

export const BudgetReducer = (state: BudgetState = initialState, action: ActionTypes) => {
    switch(action.type){
        case "agregar-presupuesto":
            return {
                ...state,
                budget:action.payload.budget
            }
    }
}