import AmountDisplay from "./AmountDisplay"

const BudgetTracker = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
      <div className="flex justify-center">
        <img src="./grafico.jpg" alt="" />
      </div>

      <div className="flex flex-col justify-center items-center gap-8">
        <button type="button" className="bg-pink-600 p-2 font-bold rounded-lg w-full text-white uppercase">Resetear App</button>

        <AmountDisplay
        label={"Presupuesto"}
        amount={300}
        />

        <AmountDisplay
        label={"Disponible"}
        amount={200}
        />

        <AmountDisplay
        label={"Gastado"}
        amount={100}
        />
      </div>
    </div>
  )
}

export default BudgetTracker