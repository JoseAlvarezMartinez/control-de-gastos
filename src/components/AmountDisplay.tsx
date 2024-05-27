import { formatter } from "../helpers"

interface AmountDisplayProps {
    label: string,
    amount:number
}

const AmountDisplay = ({ label,amount }: AmountDisplayProps) => {
    return (
        <p className="text-2xl text-blue-600 font-bold">
            {label}: {""}
            <span className="text-black">{formatter(amount)}</span>
        </p>
    )
}

export default AmountDisplay