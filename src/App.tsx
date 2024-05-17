import { useContext } from "react"
import { ContextProvider } from "./context/BudgetContext"
import BudgetForm from "./components/BudgetForm"
import BudgetTracker from "./components/BudgetTracker"
import ExpenseModal from "./components/ExpenseModal"
function App() {

  const {state:{budget}} = useContext(ContextProvider)

  return (
    <>
      <header className="bg-blue-600 py-8 max-h-72">
        <h1 className="uppercase text-center font-black text-4xl text-white">Control de Gastos</h1>

      </header>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        {budget <= 0 ? <BudgetForm /> : <BudgetTracker />}
      </div>
      <ExpenseModal />

    </>
  )
}

export default App
