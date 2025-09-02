import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AmountBar } from "./AmountBar";
import { useNavigate } from "react-router-dom";
export function RequestCard({ id, amount, type, time, timeIcon, typeIcon, timeColor, typeColor, page }) {

    const navigate = useNavigate()

    function handleClick() {
        navigate(`/${page}/${id}`,
            {
                state: {
                    id, amount, type, time, timeIcon, typeIcon, timeColor, typeColor
                }
            }
        )
    }

    return (
        <div onClick={handleClick} className="p-4 rounded-lg flex justify-between border cursor-pointer hover:border-green-500 hover:bg-green-50 transition-all">
            <div className="flex flex-col ">
                <span className="text-xl">درخواست #{id}</span>
                <div className="*:text-gray-400 mr-4 mt-2">
                    <p>زباله {type}</p>
                    <p>زمان تحویل زباله: {time}</p>
                    <p>مقدار: {amount}</p>
                </div>
            </div>
            <div className="flex flex-col items-end gap-4">
                <span className="size-2 block rounded-full bg-green-500 mb-3"></span>
                <FontAwesomeIcon className={typeColor} icon={typeIcon} />
                <FontAwesomeIcon className={timeColor} icon={timeIcon} />
                <AmountBar amount={amount} size="w-16 md:w-20" />
            </div>
        </div>
    )
}