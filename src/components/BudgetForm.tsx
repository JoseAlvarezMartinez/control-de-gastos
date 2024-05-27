import { ChangeEvent, FormEvent, useContext, useMemo, useState } from "react"
import { BudgetContext } from "../context/BudgetContext";
const BudgetForm = () => {

    const [budget, setBudget] = useState(0);
    const { dispatch } = useContext(BudgetContext)


    const isValid = useMemo(() => isNaN(budget) || budget < 1, [budget]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setBudget(e.target.valueAsNumber)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch({type:"[ADD Budget]",payload:{budget}})
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-5">
            <div className="flex flex-col space-y-5">
                <label htmlFor="budget" className="text-4xl text-blue-600 font-bold text-center">Definir Presupuesto</label>
                <input
                    value={budget}
                    onChange={handleChange}
                    type="number"
                    className="w-full bg-white border border-gray-200 p-2"
                    placeholder="Define tu presupuesto" />
            </div>

            <input
                disabled={isValid}
                type="submit"
                value={"Definir Presupuesto"}
                className="bg-blue-600 hover:bg-blue-700 cursor-pointer disabled:opacity-40 p-2 text-white font-black uppercase w-full" />
        </form>
    )
}

export default BudgetForm