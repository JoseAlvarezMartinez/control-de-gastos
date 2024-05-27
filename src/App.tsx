import { useContext } from "react"
import BudgetForm from "./components/BudgetForm"
import { BudgetContext } from "./context/BudgetContext"
import BudgetTracker from "./components/BudgetTracker"
function App() {

  const { state } = useContext(BudgetContext)

  return (
    <>
      <header className="bg-blue-600 py-8 max-h-72">
        <h1 className="uppercase text-center font-black text-4xl text-white">Control de Gastos</h1>

      </header>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        {state.budget > 0 ? <BudgetTracker /> : <BudgetForm />}
      </div>


    </>
  )
}

export default App
