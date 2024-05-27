import AmountDisplay from "./AmountDisplay"
import ExpenseModal from "./ExpenseModal"

const BudgetTracker = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
      <div className="flex justify-center">
        <img src="./grafico.jpg" alt="" />
      </div>

      <div className="flex flex-col justify-center items-center gap-8">
        <button type="button" className="bg-pink-600 p-2 font-bold rounded-lg w-full text-white uppercase">Resetear App</button>

        <AmountDisplay 
        label="Presupuesto"
        amount={500}/>
        <AmountDisplay 
        label="Disponible"
        amount={300}/>
        <AmountDisplay 
        label="Gastado"
        amount={200}/>
      </div>

      <ExpenseModal />
    </div>
  )
}

export default BudgetTracker