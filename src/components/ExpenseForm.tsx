import { categories } from "../data/categories"

const ExpenseForm = () => {
    return (
        <form className="space-y-5">
            <legend className="uppercase text-center text-2xl font-black border-b-4 py-2 border-blue-500">
                Nuevo Gasto
            </legend>


            <div className="flex flex-col gap-2 ">
                <label
                    className={"text-xl"}
                    htmlFor="expenseName">Gasto</label>
                <input id="expenseName" placeholder="Añade el nombre del gasto" className="bg-slate-100 p-2" type="text" />
            </div>

            <div className="flex flex-col gap-2 ">
                <label
                    className={"text-xl"}
                    htmlFor="amount">Cantidad</label>
                <input id="amount" placeholder="Añade la cantidad del gasto" className="bg-slate-100 p-2" type="number" />
            </div>


            <div className="flex flex-col gap-2 ">
                <label
                    className={"text-xl"}
                    htmlFor="category">Categoria</label>
                <select className="bg-slate-100 p-2" id="category">
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>
            </div>

            <input type="submit" className="bg-blue-600 cursor-pointer w-full text-white uppercase p-2 font-bold rounded-lg" value={"Registrar Gasto"}/>
        </form>
    )
}

export default ExpenseForm