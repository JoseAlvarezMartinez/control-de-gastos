export type ActionTypes =
    | { type: "agregar-presupuesto", payload: { budget: number } }
    | { type: "edit-modal", payload: { modalState: boolean } }

export interface BudgetState {
    budget: number,
    isModal: boolean
}

export const initialState: BudgetState = {
    budget: 0,
    isModal: false
}

export const BudgetReducer = (state: BudgetState = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "agregar-presupuesto":
            return {
                ...state,
                budget: action.payload.budget
            }
        case "edit-modal":
            return {
                ...state,
                isModal: action.payload.modalState
            }
    }
}