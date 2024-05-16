import { moneyFormat } from "../helpers"

interface AmountDisplayProps {
    label: string,
    amount: number
}

const AmountDisplay = ({ label, amount }: AmountDisplayProps) => {
    return (
        <p className="text-2xl text-blue-600 font-bold">
            {label}: {""}
            <span className="text-black">{moneyFormat(amount)}</span>
        </p>
    )
}

export default AmountDisplay