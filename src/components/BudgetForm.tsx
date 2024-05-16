import { FormEvent, useContext, useState } from "react"
import { BudgetContext, ContextProvider } from "../context/BudgetContext"


const BudgetForm = () => {

    const [budget, setBudget] = useState(0)
    const {dispatch} = useContext(ContextProvider)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBudget(Number(e.target.value))
    }

    const isValid = () => {
        return budget <= 0
    }

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch({type:"agregar-presupuesto",payload:{budget}})

    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col space-y-5">
                <label htmlFor="budget" className="text-4xl text-blue-600 font-bold text-center">Definir Presupuesto</label>
                <input
                    onChange={handleChange}
                    type="number" className="w-full bg-white border border-gray-200 p-2" placeholder="Define tu presupuesto" />
            </div>

            <input
                disabled={isValid()}
                type="submit" value={"Definir Presupuesto"} className="bg-blue-600 hover:bg-blue-700 cursor-pointer disabled:opacity-40 p-2 text-white font-black uppercase w-full" />
        </form>
    )
}

export default BudgetForm